"use client";

import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon } from "@heroicons/react/24/outline";

// Примерни YouTube видеа - можете да ги смените с реални линкове
const videoData = [
  {
    id: 1,
    youtubeId: "a2_9Km1B1jc",
    thumbnail: `https://img.youtube.com/vi/a2_9Km1B1jc/maxresdefault.jpg`,
  },
  {
    id: 2,
    youtubeId: "sz3FXuvuV9Y",
    thumbnail: `https://img.youtube.com/vi/sz3FXuvuV9Y/maxresdefault.jpg`,
  },
  {
    id: 3,
    youtubeId: "daZAt1y3I34",
    thumbnail: `https://img.youtube.com/vi/daZAt1y3I34/maxresdefault.jpg`,
  },
  {
    id: 4,
    youtubeId: "wotISFnX7jo",
    thumbnail: `https://img.youtube.com/vi/wotISFnX7jo/maxresdefault.jpg`,
  },
  {
    id: 5,
    youtubeId: "ifVxXFkQSxM",
    thumbnail: `https://img.youtube.com/vi/ifVxXFkQSxM/maxresdefault.jpg`,
  }
];

export default function VideoCarousel() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(null);

  // Auto-advance carousel
  useEffect(() => {
    if (isPlaying === null) {
      const interval = setInterval(() => {
        setCurrentVideo((prev) => (prev + 1) % videoData.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoData.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoData.length) % videoData.length);
  };

  const playVideo = (index) => {
    setCurrentVideo(index);
    setIsPlaying(index);
  };

  return (
    <div className="bg-white pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Видео галерия
          </h2>
        </div>

        {/* Main Video Player */}
        <div className="relative mb-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg">
            {isPlaying === currentVideo ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoData[currentVideo].youtubeId}?autoplay=1&rel=0`}
                title={videoData[currentVideo].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <div 
                className="relative w-full h-full cursor-pointer group"
                onClick={() => playVideo(currentVideo)}
              >
                <img
                  src={videoData[currentVideo].thumbnail}
                  alt={videoData[currentVideo].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#ff8d00] hover:bg-orange-600 rounded-full p-4 shadow-lg transition-all duration-300">
                    <PlayIcon className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevVideo}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-300"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-900" />
          </button>
          <button
            onClick={nextVideo}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-all duration-300"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-900" />
          </button>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-3 overflow-x-auto pb-4">
          {videoData.map((video, index) => (
            <div
              key={video.id}
              className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                index === currentVideo 
                  ? 'ring-2 ring-[#ff8d00]' 
                  : 'opacity-60 hover:opacity-100'
              }`}
              onClick={() => setCurrentVideo(index)}
            >
              <div className="relative w-32 aspect-video rounded-lg overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {videoData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentVideo
                  ? 'bg-[#ff8d00]'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 