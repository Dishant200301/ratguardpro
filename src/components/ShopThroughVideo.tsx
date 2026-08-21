import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { CUSTOMER_REELS } from '../data/mockData';

interface ShopThroughVideoProps {
  onAddToCart?: (itemTitle: string, price: string) => void;
}

export const ShopThroughVideo: React.FC<ShopThroughVideoProps> = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  const checkScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    checkScrollButtons();
    el.addEventListener('scroll', checkScrollButtons, { passive: true });
    window.addEventListener('resize', checkScrollButtons);

    return () => {
      el.removeEventListener('scroll', checkScrollButtons);
      window.removeEventListener('resize', checkScrollButtons);
    };
  }, []);

  const handleCardMouseEnter = (id: string) => {
    setPlayingVideoId(id);
    const video = videoRefs.current[id];
    if (video) {
      video.muted = isMuted;
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });
    }
  };

  const handleCardMouseLeave = (id: string) => {
    if (playingVideoId === id) {
      const video = videoRefs.current[id];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      setPlayingVideoId(null);
    }
  };

  const handleTogglePlayPause = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (playingVideoId === id) {
      const video = videoRefs.current[id];
      if (video) video.pause();
      setPlayingVideoId(null);
    } else {
      if (playingVideoId && videoRefs.current[playingVideoId]) {
        videoRefs.current[playingVideoId]?.pause();
      }
      setPlayingVideoId(id);
      const video = videoRefs.current[id];
      if (video) {
        video.muted = isMuted;
        video.play().catch(() => {
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const firstChild = el.children[0] as HTMLElement | undefined;
    const cardStep = firstChild ? firstChild.offsetWidth + 24 : 400;
    el.scrollBy({
      left: direction === 'left' ? -cardStep : cardStep,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="customer-stories-section"
      className="w-full bg-white py-10 sm:py-14 lg:py-20 border-b border-neutral-100 overflow-hidden"
    >
      {/* Section Heading centered within max-width */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs md:text-sm font-semibold tracking-widest text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full font-sans">
            Real Stories, Real Results
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#111111] tracking-tight font-sans mt-3">
            Customer <span className="text-[#0066FF]">Experiences</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg mt-2.5 font-sans font-medium">
            Watch how Ratguard is making a difference across real homes & businesses.
          </p>
        </div>
      </div>

      {/* Full-width Carousel Container with Dynamic Show/Hide Arrows */}
      <div className="w-full relative group/carousel">
        {/* Left Arrow Button */}
        {canScrollLeft && (
          <button
            id="reels-carousel-prev-btn"
            onClick={() => handleScroll('left')}
            aria-label="Previous Stories"
            className="absolute left-3 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md text-neutral-800 shadow-2xl border border-neutral-200/90 flex items-center justify-center hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] active:scale-90 transition-all duration-200 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Right Arrow Button */}
        {canScrollRight && (
          <button
            id="reels-carousel-next-btn"
            onClick={() => handleScroll('right')}
            aria-label="Next Stories"
            className="absolute right-3 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md text-neutral-800 shadow-2xl border border-neutral-200/90 flex items-center justify-center hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] active:scale-90 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Reels Cards Reel Scroll Track with Container Alignment matching Category Carousel */}
        <div
          ref={carouselRef}
          className="category-carousel-track flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 snap-x snap-mandatory"
        >
          {CUSTOMER_REELS.map((item) => {
            const isPlaying = playingVideoId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => handleCardMouseEnter(item.id)}
                onMouseLeave={() => handleCardMouseLeave(item.id)}
                onClick={(e) => handleTogglePlayPause(e, item.id)}
                className="shrink-0 w-[84vw] xs:w-[360px] sm:w-[420px] md:w-[400px] lg:w-[380px] h-[480px] sm:h-[500px] lg:h-[525px] rounded-xl sm:rounded-3xl overflow-hidden shadow-md transition-all duration-500 relative flex flex-col justify-between p-5 sm:p-6 lg:p-7 group cursor-pointer border border-neutral-200/60 select-none snap-start bg-neutral-900"
              >
                {/* Top: Customer Name & Role matching Category Heading style */}
                <div className="relative z-20 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-[24px] font-semibold tracking-tight leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                      {item.name}
                    </h3>
                    <p className="text-blue-300 text-xs sm:text-sm font-medium mt-1 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                      {item.role}
                    </p>
                  </div>

                  {/* Sound Mute/Unmute toggle (Visible when playing) */}
                  {isPlaying && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const nextMuted = !isMuted;
                        setIsMuted(nextMuted);
                        const video = videoRefs.current[item.id];
                        if (video) video.muted = nextMuted;
                      }}
                      aria-label="Toggle Audio"
                      className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/90 transition-all cursor-pointer shadow-md"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-neutral-300" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-blue-400" />
                      )}
                    </button>
                  )}
                </div>

                {/* Top Dark Gradient for Text Legibility & Visual Contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent h-44 pointer-events-none z-10" />

                {/* Video & Fallback Poster Container */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      isPlaying ? 'opacity-0' : 'opacity-100'
                    }`}
                    loading="lazy"
                  />

                  {isPlaying && item.youtubeId ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&mute=${
                        isMuted ? 1 : 0
                      }&controls=0&loop=1&playlist=${item.youtubeId}&rel=0&modestbranding=1&playsinline=1`}
                      title={item.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className="absolute inset-0 w-full h-full object-cover scale-[1.35] pointer-events-none transition-opacity duration-300 z-0"
                    />
                  ) : (
                    <video
                      ref={(el) => {
                        videoRefs.current[item.id] = el;
                      }}
                      src={item.videoUrl}
                      poster={item.thumbnail}
                      preload="metadata"
                      muted={isMuted}
                      loop
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                        isPlaying ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  )}
                </div>

                {/* Center Frosted Glass Play / Pause Button Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-10 ${
                    isPlaying
                      ? 'opacity-0 hover:opacity-100 bg-black/10'
                      : 'opacity-100 bg-black/15 group-hover:bg-black/25'
                  }`}
                >
                  <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:border-[#0066FF] transition-all">
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-1" />
                    )}
                  </div>
                </div>

                {/* Bottom: Customer Quote with Dark Gradient Overlay */}
                <div className="relative z-20 pt-16">
                  <div className="border-l-2 border-[#0066FF] pl-3 py-1">
                    <p className="text-white text-sm sm:text-base leading-snug font-medium italic drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                      {item.quote}
                    </p>
                  </div>
                </div>

                {/* Bottom Dark Gradient for Quote Legibility */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent h-40 pointer-events-none z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
