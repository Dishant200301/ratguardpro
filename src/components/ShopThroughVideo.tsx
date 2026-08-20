import React, { useState, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Volume2, VolumeX, ShoppingBag } from 'lucide-react';
import { VIDEO_PRODUCTS } from '../data/mockData';

interface ShopThroughVideoProps {
  onAddToCart: (itemTitle: string, price: string) => void;
}

export const ShopThroughVideo: React.FC<ShopThroughVideoProps> = ({ onAddToCart }) => {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleCardMouseEnter = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.play().catch(() => {});
      setPlayingVideoId(id);
    }
  };

  const handleCardMouseLeave = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.pause();
      video.currentTime = 0;
      setPlayingVideoId(null);
    }
  };

  const handleCardTap = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingVideoId === id) {
      video.pause();
      setPlayingVideoId(null);
    } else {
      // Pause any previously playing video
      if (playingVideoId && videoRefs.current[playingVideoId]) {
        videoRefs.current[playingVideoId]?.pause();
      }
      video.play().catch(() => {});
      setPlayingVideoId(id);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="shop-video-section"
      className="w-full bg-white py-16 lg:py-24 border-b border-neutral-100 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#0066FF] block mb-1">
              CUSTOMER STORIES & LIVE PROOFS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] uppercase tracking-tight">
              SHOP THROUGH VIDEO
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              id="video-carousel-prev-btn"
              onClick={() => handleScroll('left')}
              aria-label="Previous Videos"
              className="w-11 h-11 rounded-full bg-white border border-neutral-200 text-neutral-800 flex items-center justify-center shadow-sm hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="video-carousel-next-btn"
              onClick={() => handleScroll('right')}
              aria-label="Next Videos"
              className="w-11 h-11 rounded-full bg-white border border-neutral-200 text-neutral-800 flex items-center justify-center shadow-sm hover:bg-neutral-50 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Product Cards Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth pb-6"
        >
          {VIDEO_PRODUCTS.map((item) => {
            const isPlaying = playingVideoId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => handleCardMouseEnter(item.id)}
                onMouseLeave={() => handleCardMouseLeave(item.id)}
                onClick={() => handleCardTap(item.id)}
                className="shrink-0 w-72 sm:w-80 bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              >
                {/* 1. Video Container (9:16 Portrait format) */}
                <div className="relative w-full aspect-9/14 bg-neutral-900 overflow-hidden">
                  <video
                    ref={(el) => {
                      videoRefs.current[item.id] = el;
                    }}
                    src={item.videoUrl}
                    poster={item.thumbnail}
                    muted={isMuted}
                    loop
                    playsInline
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* 4K 60FPS overlay badge matching reference */}
                  <div className="absolute bottom-3 left-3 text-[10px] font-mono font-bold text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
                    4K 60FPS • REC
                  </div>

                  {/* Play/Pause Button Overlay */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                      isPlaying ? 'opacity-0 hover:opacity-100 bg-black/20' : 'opacity-100 bg-black/30'
                    }`}
                  >
                    <div className="w-14 h-14 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center shadow-xl backdrop-blur-xs group-hover:scale-110 transition-transform">
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-current" />
                      ) : (
                        <Play className="w-6 h-6 fill-current ml-1" />
                      )}
                    </div>
                  </div>

                  {/* Audio Mute toggle on corner */}
                  {isPlaying && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMuted(!isMuted);
                      }}
                      aria-label="Toggle Mute"
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-xs hover:bg-black"
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </button>
                  )}
                </div>

                {/* 2. Product Information Panel */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 space-y-3">
                  {/* Product Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-[#111111] line-clamp-2 leading-snug">
                    {item.title}
                  </h3>

                  {/* Thumbnail + Price + Discount Row */}
                  <div className="flex items-center justify-between pt-1 border-t border-neutral-100">
                    <div className="flex items-center gap-3">
                      {/* Product Thumbnail */}
                      <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center shrink-0 p-1">
                        <div className="w-8 h-6 bg-neutral-950 rounded border border-neutral-600 flex items-center justify-center">
                          <span className="text-[7px] text-neutral-400 font-bold">PRO</span>
                        </div>
                      </div>

                      {/* Prices */}
                      <div className="flex flex-col">
                        <span className="text-sm sm:text-base font-extrabold text-[#111111]">
                          {item.price}
                        </span>
                        <span className="text-xs text-neutral-400 font-medium line-through">
                          {item.originalPrice}
                        </span>
                      </div>
                    </div>

                    {/* Discount Badge */}
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="bg-[#111111] text-white text-[10px] sm:text-xs font-extrabold px-2.5 py-1 rounded-md">
                        {item.discount}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(item.title, item.price);
                        }}
                        className="text-[11px] font-bold text-[#0066FF] hover:underline flex items-center gap-1"
                      >
                        <ShoppingBag className="w-3 h-3" /> Quick Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
