import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { CUSTOMER_REELS } from '../data/mockData';

interface ShopThroughVideoProps {
  onAddToCart?: (itemTitle: string, price: string) => void;
}

export const ShopThroughVideo: React.FC<ShopThroughVideoProps> = () => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
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

  useEffect(() => {
    const unlockAudio = () => {
      if (playingVideoId && videoRefs.current[playingVideoId]) {
        const v = videoRefs.current[playingVideoId];
        if (v) {
          v.muted = false;
          v.volume = 1.0;
          v.play().catch(() => {});
        }
      }
    };

    window.addEventListener('pointerdown', unlockAudio);
    window.addEventListener('keydown', unlockAudio);
    return () => {
      window.removeEventListener('pointerdown', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
  }, [playingVideoId]);

  const handleCardMouseEnter = (id: string) => {
    // Pause any other videos that might be playing and reset to their poster frames
    (Object.entries(videoRefs.current) as [string, HTMLVideoElement | null][]).forEach(([otherId, otherVideo]) => {
      if (otherId !== id && otherVideo) {
        otherVideo.pause();
        const otherItem = CUSTOMER_REELS.find((r) => r.id === otherId);
        otherVideo.currentTime = otherItem?.posterTime ?? 0;
        otherVideo.muted = true;
      }
    });

    setPlayingVideoId(id);
    const video = videoRefs.current[id];
    if (video) {
      video.currentTime = 0; // Starts playing from the start on hover
      video.muted = false;
      video.volume = 1.0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser policy blocks sound before user interaction, play muted so video still plays smoothly!
          video.muted = true;
          video.play().catch(() => {});
        });
      }
    }
  };

  const handleCardMouseLeave = (id: string) => {
    if (playingVideoId === id) {
      const video = videoRefs.current[id];
      if (video) {
        video.pause();
        const item = CUSTOMER_REELS.find((r) => r.id === id);
        video.currentTime = item?.posterTime ?? 0;
      }
      setPlayingVideoId(null);
    }
  };

  const handleTogglePlayPause = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    const video = videoRefs.current[id];
    if (playingVideoId === id) {
      if (video) {
        video.pause();
        const item = CUSTOMER_REELS.find((r) => r.id === id);
        video.currentTime = item?.posterTime ?? 0;
      }
      setPlayingVideoId(null);
    } else {
      (Object.entries(videoRefs.current) as [string, HTMLVideoElement | null][]).forEach(([otherId, otherVideo]) => {
        if (otherId !== id && otherVideo) {
          otherVideo.pause();
          const otherItem = CUSTOMER_REELS.find((r) => r.id === otherId);
          otherVideo.currentTime = otherItem?.posterTime ?? 0;
        }
      });
      setPlayingVideoId(id);
      if (video) {
        video.currentTime = 0;
        video.muted = false;
        video.volume = 1.0;
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
    const cardStep = firstChild ? firstChild.offsetWidth + 24 : 360;
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="text-sm font-semibold tracking-widest text-[#0066FF] bg-blue-50 px-3.5 py-1 rounded-full font-sans">
            Real Stories, Real Results
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold text-[#111111] tracking-tight font-sans mt-3">
            Customer <span className="text-[#0066FF]">Experiences</span>
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base mt-2.5 font-sans font-medium">
            Watch how RatGuardPro is making a difference across real homes & businesses.
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
            className="absolute left-3 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md text-neutral-800 shadow-2xl flex items-center justify-center hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] active:scale-90 transition-all duration-200 cursor-pointer"
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
            className="absolute right-3 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md text-neutral-800 shadow-2xl flex items-center justify-center hover:bg-[#0066FF] hover:text-white hover:border-[#0066FF] active:scale-90 transition-all duration-200 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Reels Cards Reel Scroll Track with Container Alignment on Start/Left only */}
        <div
          ref={carouselRef}
          className="category-carousel-track flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 snap-x snap-mandatory"
        >
          {CUSTOMER_REELS.map((item) => {
            const isPlaying = playingVideoId === item.id;
            const posterSecond = item.posterTime ?? 0;

            return (
              <div
                key={item.id}
                onMouseEnter={() => handleCardMouseEnter(item.id)}
                onMouseLeave={() => handleCardMouseLeave(item.id)}
                onClick={(e) => handleTogglePlayPause(e, item.id)}
                className="shrink-0 w-[80vw] xs:w-[280px] sm:w-[310px] md:w-[320px] lg:w-[330px] xl:w-[340px] h-[450px] xs:h-[470px] sm:h-[490px] lg:h-[510px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg transition-all duration-300 relative flex flex-col justify-end p-4 sm:p-5 group cursor-pointer select-none snap-start snap-always"
              >
                {/* Video Element (Frozen on 2s frame initially, starts playing on hover) */}
                <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none bg-neutral-900">
                  <video
                    ref={(el) => {
                      videoRefs.current[item.id] = el;
                      if (el && !el.dataset.initialized) {
                        el.dataset.initialized = 'true';
                        if (posterSecond > 0) {
                          el.currentTime = posterSecond;
                        }
                      }
                    }}
                    onLoadedMetadata={(e) => {
                      if (posterSecond > 0 && playingVideoId !== item.id) {
                        e.currentTarget.currentTime = posterSecond;
                      }
                    }}
                    src={posterSecond > 0 ? `${item.videoUrl}#t=${posterSecond}` : item.videoUrl}
                    preload="auto"
                    loop
                    playsInline
                    controls={false}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Center Frosted Glass Play / Pause Button */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-15 ${
                    isPlaying
                      ? 'opacity-0 group-hover:opacity-100 bg-black/10'
                      : 'opacity-100 bg-black/15 group-hover:bg-black/25'
                  }`}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/25 backdrop-blur-md text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-[#0066FF] group-hover:border-[#0066FF] transition-all duration-200">
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current text-white" />
                    ) : (
                      <Play className="w-6 h-6 fill-current text-white" />
                    )}
                  </div>
                </div>

                {/* Bottom Card: ONLY Navbar Logo + Description Hook (Smoothly slides down & fades out on hover) */}
                <div className="relative z-20 transition-all duration-400 ease-out transform translate-y-0 opacity-100 group-hover:translate-y-8 group-hover:opacity-0 pointer-events-none">
                  <div className="bg-black/55 backdrop-blur-md rounded-2xl p-4 sm:p-5 text-white shadow-xl">
                    {/* Header: Exact Website Brand Logo with White Text */}
                    <div className="flex items-center mb-2.5">
                      <Logo variant="white-text" size="sm" />
                    </div>

                    {/* Main Hook Title / Description */}
                    <h3 className="text-xs sm:text-base md:text-[16px] font-bold text-white leading-snug tracking-tight font-sans">
                      {item.hookTitle || item.quote}
                    </h3>
                  </div>
                </div>

                {/* Bottom Dark Gradient for Seamless Contrast (Fades out smoothly on hover) */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent h-48 pointer-events-none z-10 transition-opacity duration-400 opacity-100 group-hover:opacity-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
