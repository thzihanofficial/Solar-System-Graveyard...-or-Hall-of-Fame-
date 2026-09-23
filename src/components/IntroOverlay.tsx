import React, { useState, useEffect, useRef } from 'react';
import { X, Volume2, Play } from 'lucide-react';
import introVideo from '../assets/intro.mp4';

interface IntroOverlayProps {
  onComplete: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [needsUserGesture, setNeedsUserGesture] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const isCompletingRef = useRef(false);

  const handleFinish = () => {
    if (isCompletingRef.current) return;
    isCompletingRef.current = true;
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Sound off kora jabe na - sound on
    video.muted = false;
    video.volume = 1.0;

    const attemptPlay = async () => {
      try {
        await video.play();
        setNeedsUserGesture(false);
      } catch (err) {
        // If browser blocks unmuted autoplay, show prompt for user gesture
        setNeedsUserGesture(true);
      }
    };

    attemptPlay();
  }, []);

  const handleStartPlay = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.volume = 1.0;
      video.play().then(() => {
        setNeedsUserGesture(false);
      }).catch((err) => {
        console.error("Video playback error:", err);
      });
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden select-none transition-all duration-800 ease-in-out ${
        isFadingOut 
          ? 'opacity-0 scale-105 blur-sm pointer-events-none' 
          : 'opacity-100 scale-100'
      }`}
    >
      {/* High Quality Fullscreen Video Player */}
      <video
        ref={videoRef}
        src={introVideo}
        preload="auto"
        playsInline
        onEnded={handleFinish}
        className="absolute inset-0 w-full h-full object-cover bg-black"
      />

      {/* Browser Autoplay Sound Protection Prompt */}
      {needsUserGesture && (
        <div 
          onClick={handleStartPlay}
          className="absolute inset-0 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center z-[100000] cursor-pointer p-6 text-center"
        >
          <div className="bg-black border-3 border-white p-8 shadow-[8px_8px_0px_0px_#2997ff] flex flex-col items-center max-w-md w-full">
            <div className="w-16 h-16 bg-[#0066cc] border-2 border-white flex items-center justify-center mb-4 shadow-[4px_4px_0px_0px_#ffffff]">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
            <h3 className="text-[22px] font-black text-white uppercase tracking-tight mb-2">
              START INTRO EXPERIENCE
            </h3>
            <p className="text-[14px] text-[#e0e0e0] font-bold mb-6 flex items-center justify-center gap-2">
              <Volume2 className="w-4 h-4 text-[#2997ff]" />
              <span>Full HD Video with Audio Enabled</span>
            </p>
            <button className="w-full bg-[#0066cc] hover:bg-[#0071e3] text-white font-black text-[15px] uppercase py-3.5 border-2 border-white shadow-[4px_4px_0px_0px_#ffffff] cursor-pointer">
              PLAY INTRO NOW
            </button>
          </div>
        </div>
      )}

      {/* Skip / Cross Button at Bottom Corner */}
      <div className="absolute bottom-6 right-6 z-[100001]">
        <button
          onClick={handleFinish}
          className="flex items-center justify-center p-3.5 bg-black hover:bg-[#0066cc] text-white border-2 border-white shadow-[4px_4px_0px_0px_#2997ff] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
          aria-label="Skip Intro"
        >
          <X className="w-6 h-6 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
