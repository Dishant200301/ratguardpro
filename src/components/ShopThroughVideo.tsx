import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';
import { CUSTOMER_REELS } from '../data/mockData';

interface ShopThroughVideoProps {
  onAddToCart?: (itemTitle: string, price: string) => void;
}

export const ShopThroughVideo: React.FC<ShopThroughVideoProps> = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleCardMouseEnter = (id: string) => {
    setPlayingVideoId(id);
    const video = videoRefs.current[id];
    if (video) {
      video.muted = isMuted;
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => { });
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
      // Pause any previously playing video
      if (playingVideoId && videoRefs.current[playingVideoId]) {
        videoRefs.current[playingVideoId]?.pause();
      }
      setPlayingVideoId(id);
      const video = videoRefs.current[id];
      if (video) {
        video.muted = isMuted;
        video.play().catch(() => {
          video.muted = true;
          video.play().catch(() => { });
        });
      }
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const el = carouselRef.current;
    if (!el) return;
    const firstChild = el.children[0] as HTMLElement | undefined;
    const cardStep = firstChild ? firstChild.offsetWidth + 24 : 320;
    const scrollAmount = direction === 'left' ? -cardStep : cardStep;
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    const el = carouselRef.current;
    if (!el) return;
    const targetChild = el.children[index] as HTMLElement | undefined;
    if (targetChild) {
      const targetLeft = targetChild.offsetLeft - el.offsetLeft;
      el.scrollTo({
        left: targetLeft,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleScrollEvent = () => {
      const scrollLeft = el.scrollLeft;
      const firstChild = el.children[0] as HTMLElement | undefined;
      const cardStep = firstChild ? firstChild.offsetWidth + 24 : 320;
      const newIndex = Math.round(scrollLeft / cardStep);
      setActiveIndex(Math.max(0, Math.min(CUSTOMER_REELS.length - 1, newIndex)));
    };

    el.addEventListener('scroll', handleScrollEvent, { passive: true });
    return () => el.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <section
      id="customer-stories-section"
      className="w-full bg-white py-16 lg:py-24 border-b border-neutral-100 select-none overflow-hidden"
    >
      {/* Section Heading centered within max-width */}
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-[#111111] tracking-tight font-sans">
            Real Stories, <span className="text-[#0066FF]">Real Results</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base md:text-lg mt-2.5 font-sans font-medium">
            Watch how Ratguard is making a difference.
          </p>
        </div>
      </div>

      {/* Full-width Carousel Container touching right side of screen on laptop view */}
      <div className="w-full relative group/carousel">
        {/* Left Arrow Button */}
        <button
          id="reels-carousel-prev-btn"
          onClick={() => handleScroll('left')}
          aria-label="Previous Stories"
          className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-neutral-800 shadow-2xl border border-neutral-200/90 flex items-center justify-center hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] active:scale-90 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          id="reels-carousel-next-btn"
          onClick={() => handleScroll('right')}
          aria-label="Next Stories"
          className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/95 backdrop-blur-md text-neutral-800 shadow-2xl border border-neutral-200/90 flex items-center justify-center hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] active:scale-90 transition-all cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Video Cards Reel Scroll Container - Centered cards on mobile, preserved tablet & laptop */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-3 px-[calc((100vw-min(82vw,320px))/2)] sm:px-6 lg:pl-[max(2rem,calc((100vw-1500px)/2+2rem))] lg:pr-8 snap-x snap-mandatory"
        >
          {CUSTOMER_REELS.map((item) => {
            const isPlaying = playingVideoId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => handleCardMouseEnter(item.id)}
                onMouseLeave={() => handleCardMouseLeave(item.id)}
                onClick={(e) => handleTogglePlayPause(e, item.id)}
                className="shrink-0 w-[82vw] sm:w-[390px] lg:w-[320px] xl:w-[335px] max-w-[320px] sm:max-w-[350px] aspect-9/16 bg-neutral-950 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative flex flex-col group cursor-pointer border border-neutral-200/60 select-none snap-center"
              >
                {/* Top-Left: Navbar-style RatGuardPro Brand Logo Overlay Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-white select-none">
                  <img
                    src="/apple-touch-icon.png"
                    alt="RatGuardPro Logo"
                    className="w-4 h-4 rounded-md object-contain"
                  />
                  <span className="text-xs font-bold text-white tracking-tight font-sans">
                    RatGuard<span className="text-[#0066FF]">Pro</span>
                  </span>
                </div>

                {/* Top-Right: Sound Mute/Unmute toggle (Visible when playing) */}
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
                    className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black/90 transition-all cursor-pointer shadow-md"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-neutral-300" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-blue-400" />
                    )}
                  </button>
                )}

                {/* Video & Fallback Poster Container (Never empty) */}
                <div className="absolute inset-0 w-full h-full bg-neutral-900 overflow-hidden">
                  {/* Underlying Poster Image (Always visible so card is never empty) */}
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover select-none"
                    loading="lazy"
                  />

                  {/* YouTube Shorts Embed or HTML5 Video Playback */}
                  {isPlaying && item.youtubeId ? (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&mute=${isMuted ? 1 : 0
                        }&controls=0&loop=1&playlist=${item.youtubeId}&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1`}
                      title={item.name}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className="absolute inset-0 w-full h-full object-cover scale-[1.35] pointer-events-none transition-opacity duration-300"
                    />
                  ) : (
                    <video
                      ref={(el) => {
                        videoRefs.current[item.id] = el;
                      }}
                      src={item.videoUrl}
                      poster={item.thumbnail}
                      preload="auto"
                      muted={isMuted}
                      loop
                      playsInline
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                  )}
                </div>

                {/* Center Frosted Glass Play / Pause Button Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-10 ${isPlaying
                    ? 'opacity-0 hover:opacity-100 bg-black/10'
                    : 'opacity-100 bg-black/20 group-hover:bg-black/30'
                    }`}
                >
                  <div className="w-14 h-14 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:border-[#0066FF] transition-all">
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-1" />
                    )}
                  </div>
                </div>

                {/* Bottom Information Overlay matching exact screenshot structure */}
                <div className="absolute inset-x-0 bottom-0 pt-20 pb-5 px-5 bg-gradient-to-t from-black/95 via-black/65 to-transparent z-20 flex flex-col justify-end text-left pointer-events-none">
                  <h4 className="text-white font-bold text-base sm:text-lg leading-tight font-sans">
                    {item.name}
                  </h4>
                  <p className="text-neutral-300 text-xs sm:text-sm mt-0.5 font-sans font-normal">
                    {item.role}
                  </p>

                  {/* Customer Quote with Website Blue Left Accent */}
                  <div className="mt-2.5 border-l-2 border-[#0066FF] pl-2.5">
                    <p className="text-neutral-200 text-xs sm:text-sm leading-snug font-medium italic font-sans">
                      {item.quote}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Pagination Indicator Dots */}
      <div className="flex justify-center items-center gap-2.5 mt-8 sm:mt-10">
        {CUSTOMER_REELS.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to story ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${activeIndex === idx
              ? 'w-7 h-2.5 bg-[#0066FF] shadow-xs'
              : 'w-2.5 h-2.5 bg-neutral-300 hover:bg-neutral-400'
              }`}
          />
        ))}
      </div>
    </section>
  );
};
