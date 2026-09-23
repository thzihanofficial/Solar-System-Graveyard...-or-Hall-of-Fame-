import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export const MoonPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#141416] text-white selection:bg-[#0066cc]/30 selection:text-[#0066cc]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-[74px] pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center">
        {/* Back Navigation Button */}
        <div className="mb-8">
          <button
            onClick={() => window.location.hash = ''}
            className="inline-flex items-center space-x-2.5 text-[15px] font-black uppercase text-white bg-black border-2 border-white px-4 py-2 shadow-[3px_3px_0px_0px_#ffffff] hover:bg-[#0066cc] hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[3]" />
            <span>Back to Explorer</span>
          </button>
        </div>

        {/* Header Block */}
        <div className="max-w-3xl mb-12 border-l-6 border-[#2997ff] pl-6 py-2 bg-black border-2 border-white p-6 shadow-[6px_6px_0px_0px_#ffffff]">
          <span className="text-[14px] font-black text-[#2997ff] uppercase tracking-wider block mb-1">
            LUNAR ARCHIVE
          </span>
          <h1 className="text-[48px] md:text-[64px] font-black tracking-tighter text-white uppercase leading-none">
            Moon Exploration
          </h1>
        </div>

        {/* 7 Moon Mission Cards Stacked */}
        <div className="flex flex-col items-center gap-8 w-full max-w-6xl mx-auto">
          {[
            {
              name: "Surveyor 1",
              time: "June 1966 - July 1966",
              desc: "I was the first American spacecraft to land softly on the Moon—back then, no one even knew whether the lunar soil was hard or soft.",
              img: "https://www.nasa.gov/wp-content/uploads/2021/05/surveyor_1_2_model.jpg",
              hash: "#/moon/surveyor1",
              fitImage: true
            },
            {
              name: "Surveyor 3",
              time: "April 1967 - May 1967",
              desc: "I was digging the soil alone on the moon; there was no one with me. Two and a half years later, two astronauts suddenly walked up—to see me!",
              img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/as12-48-7134_1280.jpg?w=1280&h=1280&fit=crop&crop=faces%2Cfocalpoint",
              hash: "#/moon/surveyor3"
            },
            {
              name: "Surveyor 5, 6, 7",
              time: "Sept 1967 - Jan 1968",
              desc: "We are three siblings. We were able to tell what elements were present in the Moon’s soil without even touching it.",
              img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Surveyor_NASA_lunar_lander.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
              hash: "#/moon/surveyor567",
              fitImage: true
            },
            {
              name: "Apollo 15 LRV (1971)",
              time: "July 1971 - August 1971",
              desc: "I was the first vehicle on the Moon — no roads, no maps, just me and two astronauts in a completely unknown world.",
              img: "https://www.nasa.gov/wp-content/uploads/2023/03/as15-88-11901orig.jpg",
              hash: "#/moon/apollo15lrv",
              fitImage: true
            },
            {
              name: "Apollo 16 LRV (1972)",
              time: "April 1972 - April 1972",
              desc: "My brother, the Apollo 15 LRV, explored the Moon, but I wanted to know — how fast could I go? The answer surprised all of NASA.",
              img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Moon_Buggy_Ap16-KSC-71PC-777.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
              hash: "#/moon/apollo16lrv"
            },
            {
              name: "Apollo 17 LRV (1972)",
              time: "December 1972",
              desc: "I am the vehicle that carried the last humans to explore the Moon. More than 50 years have passed since then, and no one has returned.",
              img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/lunar-science/2023/08/eugene_cernan-full-a.jpg?w=3295&h=1764&fit=clip&crop=faces%2Cfocalpoint",
              hash: "#/moon/apollo17lrv"
            },
            {
              name: "Clementine (1994)",
              time: "January 1994 - June 1994",
              desc: "I mapped the entire Moon, peeking into every corner. And one day, my radar detected something that shocked the entire scientific community — ice!",
              img: "https://images-assets.nasa.gov/image/PIA18159/PIA18159~orig.jpg",
              hash: "#/moon/clementine"
            }
          ].map((card, idx) => (
            <div 
              key={idx}
              className={`w-full ${card.fitImage ? 'h-auto' : 'h-auto md:min-h-[360px]'} bg-[#222225] border-3 border-white rounded-none overflow-hidden flex flex-col-reverse md:flex-row justify-between transition-all duration-200 group shadow-[8px_8px_0px_0px_#ffffff]`}
            >
              {/* Left Column: Info & Button */}
              <div className={card.fitImage ? "p-8 md:p-10 flex flex-col justify-between flex-grow md:w-1/2 gap-6" : "p-6 md:p-10 flex flex-col justify-between flex-grow md:w-1/2"}>
                <div>
                  <h3 className="text-[34px] sm:text-[44px] md:text-[50px] font-black uppercase text-white mb-3 tracking-tight leading-none">
                    {card.name}
                  </h3>
                  <span className="text-[17px] sm:text-[19px] font-black text-[#2997ff] uppercase tracking-widest mb-5 block border-l-4 border-[#2997ff] pl-3 py-0.5">
                    {card.time}
                  </span>
                  <p className="text-white/90 text-[20px] sm:text-[23px] md:text-[25px] font-semibold leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                  <button
                    onClick={() => window.location.hash = card.hash}
                    className="w-full sm:w-auto text-center py-3.5 px-7 bg-[#0066cc] hover:bg-[#0071e3] text-[16px] font-black uppercase border-2 border-white text-white shadow-[4px_4px_0px_0px_#ffffff] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
                  >
                    Read My Story
                  </button>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 self-start sm:self-auto px-4.5 py-2.5 bg-black border-2 border-white/60 rounded-none text-[15px] font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_0px_#ffffff]">
                    {card.time.toLowerCase().includes("present") ? (
                      <>
                        <span className="w-2.5 h-2.5 bg-emerald-500 shrink-0" />
                        <span>Still Active</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2.5 h-2.5 bg-red-500 shrink-0" />
                        <span>Gone Silent</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className={`md:w-1/2 relative overflow-hidden shrink-0 border-b-3 md:border-b-0 md:border-l-3 border-white ${card.fitImage ? 'h-auto flex items-center justify-center' : 'h-52 md:h-full'}`}>
                <img 
                  src={card.img}
                  alt={card.name}
                  className={`w-full ${card.fitImage ? 'h-auto block object-cover' : 'h-full object-cover'} transition-transform duration-300 group-hover:scale-105`}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
