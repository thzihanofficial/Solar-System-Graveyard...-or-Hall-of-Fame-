import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { 
  ArrowLeft, Calendar, MapPin, Target, Lightbulb, CheckCircle2, 
  XCircle, ArrowRight, BookOpen, Sparkles, Images, Maximize2 
} from 'lucide-react';

export interface MissionChapter {
  title: string;
  content: string;
}

export interface MissionStats {
  launchDate: string;
  landingDate: string;
  dataSent: string;
  status: string;
  isStillActive?: boolean;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface MissionDetailProps {
  categoryName: string; // e.g. 'Moon Exploration'
  categoryHash: string; // e.g. '#/moon'
  statusBadge: string; // e.g. 'Historical Landmark'
  isStillActive?: boolean;
  name: string;
  dateRange: string;
  location: string;
  imageSrc: string;
  imageAlt?: string;
  iframeSrc?: string;
  
  // Custom images arrays for new feature
  capturedImages?: string[]; // 4 images for modal popup
  galleryImages?: string[];  // 3 images for interactive card carousel
  hideCapturedImagesButton?: boolean;
  
  // 1st Person Narrative Chapters
  chapters: MissionChapter[];
  
  // Stats Box
  stats: MissionStats;
  
  // Did You Know?
  didYouKnow: string;
  
  // Objectives
  objectives: string[];
  
  // Interactive Quiz
  quiz?: QuizQuestion;
  
  // Bottom Navigation
  prevStory?: { name: string; hash: string };
  nextStory?: { name: string; hash: string };
}

// Fallback high quality space imagery if not custom provided
const DEFAULT_CAPTURED_IMAGES = [
  'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1000&auto=format&fit=crop'
];

export const MissionDetailLayout: React.FC<MissionDetailProps> = ({
  categoryName,
  categoryHash,
  statusBadge,
  isStillActive = false,
  name,
  dateRange,
  location,
  imageSrc,
  imageAlt,
  iframeSrc,
  capturedImages,
  galleryImages,
  chapters,
  stats,
  didYouKnow,
  objectives,
  quiz,
  prevStory,
  nextStory,
  hideCapturedImagesButton = false
}) => {
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [isCapturedModalOpen, setIsCapturedModalOpen] = useState(false);

  // Ensure 4 images for the popup modal
  const modalImages: string[] = capturedImages && capturedImages.length >= 4
    ? capturedImages.slice(0, 4)
    : [
        imageSrc,
        capturedImages?.[1] || DEFAULT_CAPTURED_IMAGES[1],
        capturedImages?.[2] || DEFAULT_CAPTURED_IMAGES[2],
        capturedImages?.[3] || DEFAULT_CAPTURED_IMAGES[3]
      ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c10] text-white selection:bg-[#0066cc]/20 selection:text-[#0066cc] font-mono-retro retro-grid-pattern">
      <Navbar />

      <main className="flex-1 w-full pt-[80px] pb-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto flex flex-col">
        {/* Top Back Navigation */}
        <div className="mb-6">
          <button
            onClick={() => window.location.hash = categoryHash}
            className="inline-flex items-center space-x-2 text-[14px] font-bold uppercase tracking-wider text-white hover:text-[#2997ff] transition-all focus:outline-none rounded-none px-4 py-2 bg-black border-2 border-white shadow-[3px_3px_0px_0px_#2997ff] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer font-mono-retro"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>&lt; BACK TO {categoryName}</span>
          </button>
        </div>

        {/* Header Section */}
        <div className="mb-10 pb-8 border-b-4 border-white/20">
          <div className={`inline-flex items-center space-x-2 px-4 py-1.5 bg-black border-2 ${isStillActive ? 'border-emerald-400 shadow-[3px_3px_0px_0px_#10b981]' : 'border-red-500 shadow-[3px_3px_0px_0px_#ef4444]'} rounded-none mb-4`}>
            <span className={`w-3 h-3 rounded-none ${isStillActive ? 'bg-emerald-400 animate-pulse' : 'bg-red-500'}`} />
            <span className={`text-[12px] font-black uppercase tracking-widest ${isStillActive ? 'text-emerald-400' : 'text-red-400'}`}>
              [ STATUS: {statusBadge} ]
            </span>
          </div>

          <h1 className="text-[32px] sm:text-[46px] md:text-[60px] font-black tracking-tighter text-white uppercase mb-4 leading-none font-mono-retro retro-glow-blue">
            {name}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-[14px] sm:text-[15px] text-[#a1a1a6]">
            <span className="flex items-center text-white font-bold uppercase tracking-wide border-2 border-white/40 px-3 py-1 bg-black rounded-none shadow-[2px_2px_0px_0px_#2997ff]">
              <Calendar className="w-4 h-4 mr-2 text-[#2997ff]" />
              {dateRange}
            </span>
            <span className="flex items-center text-white font-bold uppercase tracking-wide border-2 border-white/40 px-3 py-1 bg-black rounded-none shadow-[2px_2px_0px_0px_#2997ff]">
              <MapPin className="w-4 h-4 mr-2 text-[#2997ff]" />
              {location}
            </span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Story + Stats & Did You Know */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            {/* MY STORY Header */}
            <div className="bg-[#121318] border-3 border-white rounded-none p-6 md:p-8 shadow-[6px_6px_0px_0px_#2997ff]">
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b-2 border-white/20">
                <BookOpen className="w-6 h-6 text-[#2997ff]" />
                <h2 className="text-[22px] sm:text-[26px] font-black text-white uppercase tracking-wider font-mono-retro">
                  &gt; MISSION CHRONICLES [LOGS]
                </h2>
              </div>

              {/* Chapters */}
              <div className="space-y-8">
                {chapters.map((chapter, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <h3 className="text-[17px] sm:text-[19px] font-black text-[#2997ff] uppercase tracking-wide flex items-center font-mono-retro">
                      <span className="w-2.5 h-2.5 rounded-none bg-[#2997ff] mr-2.5 shrink-0" />
                      [{idx + 1}] {chapter.title}
                    </h3>
                    <p className="text-[#e0e0e0] text-[15px] sm:text-[16px] leading-relaxed pl-4 border-l-4 border-[#2997ff] font-mono-retro">
                      "{chapter.content}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Box & Did You Know Box Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* STATS BOX */}
              <div className="bg-[#121318] border-3 border-white rounded-none p-6 shadow-[6px_6px_0px_0px_#2997ff] flex flex-col justify-between font-mono-retro">
                <h3 className="text-[15px] font-black text-white uppercase tracking-wider mb-4 pb-3 border-b-2 border-white/20 flex items-center justify-between">
                  <span>TELEMETRY DATA</span>
                  <span className="text-[10px] text-[#2997ff]">[SYS.STAT]</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] text-[#86868b] uppercase font-black block mb-0.5">&gt; LAUNCH DATE</span>
                    <strong className="text-white text-[14px] font-bold">{stats.launchDate}</strong>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#86868b] uppercase font-black block mb-0.5">&gt; LANDING / TARGET</span>
                    <strong className="text-white text-[14px] font-bold">{stats.landingDate}</strong>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#86868b] uppercase font-black block mb-0.5">&gt; TRANSMITTED DATA</span>
                    <strong className="text-white text-[14px] font-bold">{stats.dataSent}</strong>
                  </div>
                  <div>
                    <span className="text-[11px] text-[#86868b] uppercase font-black block mb-0.5">&gt; HARDWARE STATUS</span>
                    <strong className={`text-[14px] font-extrabold uppercase ${stats.isStillActive || isStillActive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {stats.status}
                    </strong>
                  </div>
                </div>
              </div>

              {/* DID YOU KNOW? BOX */}
              <div className="bg-black border-3 border-amber-400 rounded-none p-6 shadow-[6px_6px_0px_0px_#f59e0b] flex flex-col justify-between font-mono-retro">
                <div>
                  <div className="flex items-center space-x-2.5 mb-3 text-amber-400">
                    <Lightbulb className="w-5 h-5 fill-amber-400/20" />
                    <h3 className="text-[15px] font-black uppercase tracking-wider">&gt; ARCHIVE FACT</h3>
                  </div>
                  <p className="text-[#e2e2e2] text-[14px] leading-relaxed italic font-medium">
                    "{didYouKnow}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3-Image Carousel + Popup Link + Objectives + Quiz */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Task 1 Link: "The images I captured." -> Opens Popup Modal */}
            {!hideCapturedImagesButton && (
              <button
                onClick={() => setIsCapturedModalOpen(true)}
                className="w-full flex items-center justify-between p-4 bg-[#121318] hover:bg-[#1a1b22] border-3 border-[#2997ff] rounded-none transition-all group cursor-pointer shadow-[6px_6px_0px_0px_#2997ff] text-left hover:-translate-x-1 hover:-translate-y-1 active:translate-x-0 active:translate-y-0 active:shadow-none font-mono-retro"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#0066cc] border-2 border-black rounded-none text-white shrink-0">
                    <Images className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[15px] sm:text-[16px] font-black uppercase text-white tracking-wide block">
                      &gt; VIEW CAPTURED ARCHIVE &lt;
                    </span>
                  </div>
                </div>
                <div className="p-2 bg-black border-2 border-white rounded-none text-[#2997ff] group-hover:bg-[#2997ff] group-hover:text-white transition-all shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            )}

            {/* Single Primary Mission Image Box or 3D Interactive Embed */}
            <div className="rounded-none overflow-hidden border-3 border-white shadow-[6px_6px_0px_0px_#ffffff] relative w-full bg-black crt-scanlines">
              <div className="relative w-full overflow-hidden bg-black">
                {iframeSrc ? (
                  <iframe
                    src={iframeSrc}
                    title={imageAlt || name}
                    className="w-full h-[400px] sm:h-[480px] border-0 rounded-none block"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={imageSrc}
                    alt={imageAlt || name}
                    className="w-full h-auto block object-cover rounded-none"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </div>

            {/* Mission Objectives Box */}
            <div className="bg-[#121318] border-3 border-white rounded-none p-6 shadow-[6px_6px_0px_0px_#ffffff] space-y-4 font-mono-retro">
              <h3 className="text-[16px] font-black uppercase tracking-wider text-white flex items-center pb-3 border-b-2 border-white/20">
                <Target className="w-5 h-5 mr-2 text-[#2997ff]" />
                &gt; PRIMARY OBJECTIVES
              </h3>
              <ul className="space-y-3 text-[14px] text-[#cccccc] font-medium">
                {objectives.map((obj, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#2997ff] mr-2.5 font-black">&gt;</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Interactive Mini Quiz Widget */}
            {quiz && (
              <div className="bg-[#121318] border-3 border-[#2997ff] rounded-none p-6 shadow-[6px_6px_0px_0px_#2997ff] space-y-4 font-mono-retro">
                <div className="flex items-center space-x-2 text-[#2997ff]">
                  <h3 className="text-[15px] font-black uppercase tracking-wider text-white">&gt; TELEMETRY QUIZ</h3>
                </div>
                <p className="text-[14px] font-bold text-white">
                  {quiz.question}
                </p>
                <div className="space-y-2.5 pt-1">
                  {quiz.options.map((opt, oIdx) => {
                    const isSelected = selectedQuizOption === oIdx;
                    const isCorrect = oIdx === quiz.correctIndex;
                    let btnStyle = "bg-black border-2 border-white text-white hover:bg-white/10 shadow-[3px_3px_0px_0px_#ffffff]";

                    if (selectedQuizOption !== null) {
                      if (isCorrect) {
                        btnStyle = "bg-emerald-500 border-2 border-black text-black font-black shadow-[3px_3px_0px_0px_#000000]";
                      } else if (isSelected) {
                        btnStyle = "bg-red-500 border-2 border-black text-white font-bold shadow-[3px_3px_0px_0px_#000000]";
                      }
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => setSelectedQuizOption(oIdx)}
                        className={`w-full text-left p-3 rounded-none text-[13px] font-bold transition-all duration-150 flex items-center justify-between cursor-pointer ${btnStyle}`}
                      >
                        <span>[{oIdx + 1}] {opt}</span>
                        {selectedQuizOption !== null && isCorrect && <CheckCircle2 className="w-4 h-4 text-black shrink-0 ml-2" />}
                        {selectedQuizOption !== null && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-white shrink-0 ml-2" />}
                      </button>
                    );
                  })}
                </div>

                {selectedQuizOption !== null && (
                  <div className="mt-3 p-3 bg-black border-2 border-white rounded-none text-[13px] text-[#cccccc] leading-relaxed">
                    <strong className="text-white uppercase font-black block mb-1">
                      {selectedQuizOption === quiz.correctIndex ? "🎉 TRANSMISSION CONFIRMED!" : "💡 TELEMETRY EXPLANATION:"}
                    </strong>
                    {quiz.explanation}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="mt-16 pt-8 border-t-4 border-white/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-retro">
          {prevStory ? (
            <button
              onClick={() => {
                window.location.hash = prevStory.hash;
                window.scrollTo(0, 0);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-5 py-3 bg-[#121318] hover:bg-[#1a1b22] border-2 border-white rounded-none text-[13px] font-black uppercase text-white transition-all shadow-[4px_4px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#2997ff] transition-transform group-hover:-translate-x-1" />
              <div className="text-left">
                <span className="text-[10px] text-[#86868b] uppercase block font-black">&lt; PREVIOUS TRANSMISSION</span>
                <span>{prevStory.name}</span>
              </div>
            </button>
          ) : <div />}

          <button
            onClick={() => {
              window.location.hash = categoryHash;
              window.scrollTo(0, 0);
            }}
            className="text-[13px] font-black uppercase text-[#2997ff] border-2 border-[#2997ff] px-4 py-2 bg-black hover:bg-[#2997ff] hover:text-white transition-all shadow-[3px_3px_0px_0px_#2997ff] cursor-pointer"
          >
            [ EXPLORE ALL {categoryName} ]
          </button>

          {nextStory ? (
            <button
              onClick={() => {
                window.location.hash = nextStory.hash;
                window.scrollTo(0, 0);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-5 py-3 bg-[#0066cc] hover:bg-[#0071e3] border-2 border-white rounded-none text-[13px] font-black uppercase text-white transition-all shadow-[4px_4px_0px_0px_#ffffff] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
            >
              <div className="text-right">
                <span className="text-[10px] text-white/80 uppercase block font-black">NEXT TRANSMISSION &gt;</span>
                <span>{nextStory.name}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
            </button>
          ) : <div />}
        </div>
      </main>

      {/* Fullscreen Popup Modal for Task 1: "The images I captured." (4 Scrollable Images) */}
      {isCapturedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 animate-fadeIn">
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#1c1c1e] border-4 border-white rounded-none shadow-[10px_10px_0px_0px_#ffffff] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-5 border-b-4 border-white flex items-center justify-between bg-[#242426]">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-[#0066cc] border-2 border-black rounded-none text-white">
                  <Images className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-[20px] sm:text-[24px] font-black text-white uppercase tracking-wider">
                    Captured Images Archive
                  </h2>
                </div>
              </div>
            </div>

            {/* Modal Body: Scrollable 4-Image Grid & Viewer */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {modalImages.map((imgUrl, index) => (
                  <div key={index} className="bg-[#242426] border-3 border-white rounded-none overflow-hidden shadow-[5px_5px_0px_0px_#ffffff] flex flex-col">
                    <div className="relative aspect-[4/3] bg-black overflow-hidden border-b-2 border-white">
                      <img
                        src={imgUrl}
                        alt={`${name} Captured frame ${index + 1}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 flex items-center justify-between bg-black border-t-2 border-white">
                      <span className="text-[13px] font-bold uppercase text-white">
                        {name} - Frame {index + 1}
                      </span>
                      <a
                        href={imgUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[12px] font-black uppercase text-[#2997ff] border-2 border-[#2997ff] px-2.5 py-1 bg-black hover:bg-[#2997ff] hover:text-white transition-all shadow-[2px_2px_0px_0px_#2997ff] inline-flex items-center space-x-1"
                      >
                        <span>Full Res</span>
                        <Maximize2 className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-[#242426] border-t-4 border-white flex items-center justify-end">
              <button
                onClick={() => setIsCapturedModalOpen(false)}
                className="px-6 py-2.5 bg-[#0066cc] hover:bg-[#0071e3] text-white font-black uppercase border-2 border-white shadow-[4px_4px_0px_0px_#ffffff] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none cursor-pointer"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

