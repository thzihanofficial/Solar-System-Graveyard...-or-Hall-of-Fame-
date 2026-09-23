import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export const MarsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#141416] text-white selection:bg-[#ff6b4a]/30 selection:text-[#ff6b4a]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-[74px] pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center">
        {/* Back Navigation Button */}
        <div className="mb-8">
          <button
            onClick={() => window.location.hash = ''}
            className="inline-flex items-center space-x-2.5 text-[15px] font-black uppercase text-white bg-black border-2 border-white px-4 py-2 shadow-[3px_3px_0px_0px_#ffffff] hover:bg-[#ff6b4a] hover:text-black transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[3]" />
            <span>Back to Explorer</span>
          </button>
        </div>

        {/* Header Block */}
        <div className="max-w-3xl mb-12 border-l-6 border-[#ff6b4a] pl-6 py-2 bg-black border-2 border-white p-6 shadow-[6px_6px_0px_0px_#ffffff]">
          <span className="text-[14px] font-black text-[#ff6b4a] uppercase tracking-wider block mb-1">
            MARTIAN ARCHIVE
          </span>
          <h1 className="text-[48px] md:text-[64px] font-black tracking-tighter text-white uppercase leading-none">
            Mars Exploration
          </h1>
        </div>

        {/* 17 Mars Mission Cards Stacked */}
        <div className="flex flex-col items-center gap-8 w-full max-w-6xl mx-auto">
          {[
            {
              name: "Mariner 6 (1969)",
              time: "July 1969",
              desc: "I was the first to capture close-up images of Mars — and what I saw shocked scientists. Mars was even more mysterious than they had imagined.",
              img: "https://assets.science.nasa.gov/content/dam/science/psd/solar/2023/07/mariner6_7.gif?w=640&h=480&fit=clip&crop=faces%2Cfocalpoint",
              hash: "#/mars/mariner6"
            },
            {
              name: "Mariner 7 (1969)",
              time: "August 1969",
              desc: "Just one month after my twin, Mariner 6, I also flew past Mars — and I discovered the ice caps at Mars poles!",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYMmzNwMfGaqPfWivlo6xtXppTrJZ8mgNsILg4Qk08A&s=10",
              hash: "#/mars/mariner7"
            },
            {
              name: "Mariner 9 (1971)",
              time: "1971 - 1972",
              desc: "I was the first human-made spacecraft to orbit another planet. But when I arrived, I found Mars completely covered by a massive dust storm — I had to wait.",
              img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Mariner09.jpg/960px-Mariner09.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
              hash: "#/mars/mariner9"
            },
            {
              name: "Viking 1 & 2 (1975)",
              time: "1975 - 1982",
              desc: "We tested the soil of Mars to answer one question — is there life there? The answer still remains a subject of debate among scientists today.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtLUbMS9m1y779K-Eq-BvAVb0Je5ojhbQUX3zNM_vlA&s=10",
              hash: "#/mars/viking1and2"
            },
            {
              name: "Mars Global Surveyor (1996)",
              time: "1996 - 2006",
              desc: "I spent 10 years orbiting Mars, studying every mountain and every dust storm in detail — I mapped an entire planet all by myself.",
              img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/mgs_768.jpg?w=768&h=650&fit=crop&crop=faces%2Cfocalpoint",
              hash: "#/mars/marsglobalsurveyor"
            },
            {
              name: "Mars Pathfinder (1996)",
              time: "1996 - 1997",
              desc: "I landed on Mars wrapped in airbags — bouncing all the way! And with me was a little friend, Sojourner, the first rover to drive across the Martian surface.",
              img: "https://assets.thehansindia.com/h-upload/2023/07/03/1362499-nasa.webp",
              hash: "#/mars/marspathfinder"
            },
            {
              name: "Sojourner (1997)",
              time: "July 1997 - Sept 1997",
              desc: "I had to be driven from Earth, but every command took about 11 minutes to reach me — imagine if the steering wheel responded 11 minutes after you turned it!",
              img: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Sojourner_on_Mars_PIA01122.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
              hash: "#/mars/sojourner"
            },
            {
              name: "2001 Mars Odyssey (2001)",
              time: "2001 - Present",
              desc: "I have been orbiting Mars for more than 20 years — of all the spacecraft at Mars, I have been operating the longest, and I still haven't stopped.",
              img: "https://media.gettyimages.com/id/900381/photo/in-this-artists-conception-nasas-2001-mars-odyssey-spacecraft-is-shown-in-orbit-around-mars.jpg?s=612x612&w=0&k=20&c=pEmx_K0GnUUaAHMJHmUIFTENxHxDup4OJlvHRJ2NTUQ=",
              hash: "#/mars/marsodyssey"
            },
            {
              name: "Spirit & Opportunity (MER - 2003)",
              time: "2003 - 2018",
              desc: "We landed in two different places on Mars, but together we proved that this Red Planet once had water.",
              img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/NASA_Mars_Rover.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
              hash: "#/mars/spiritandopportunity"
            },
            {
              name: "Opportunity / MER-B (2004–2018)",
              time: "2004 - 2018",
              desc: "I was sent to work for just 90 days. I survived for 15 years and traveled farther across Mars than any human could have.",
              img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/solar/2023/07/1057_rover2_768.jpg?w=768&h=576&fit=clip&crop=faces%2Cfocalpoint",
              hash: "#/mars/opportunity"
            },
            {
              name: "Mars Reconnaissance Orbiter (MRO - 2005)",
              time: "2005 - Present",
              desc: "I am the messenger for every robot on Mars — I send everything they discover back to Earth. I have been doing this for 20 years.",
              img: "https://science.nasa.gov/wp-content/uploads/2017/12/mars-reconnaissance-orbiter-pia04916.jpg",
              hash: "#/mars/marsreconnaissanceorbiter"
            },
            {
              name: "Phoenix Mars Lander (2007)",
              time: "2007 - 2008",
              desc: "I proved that there really is ice hidden beneath the Martian soil — I dug it out with my own robotic arm.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHkX_W1m7F2Pv_S83CPWr9-9uoYkAFQwTsBW9CuwcZA&s=10",
              hash: "#/mars/phoenixmarslander"
            },
            {
              name: "Curiosity Rover (2011)",
              time: "2011 - Present",
              desc: "I am still exploring Mars, drilling into the floor of an ancient lake — one day, I may find evidence that life really could have existed on Mars.",
              img: "https://www.nasa.gov/wp-content/uploads/2026/04/25382-pia24173-1600.jpg",
              hash: "#/mars/curiosityrover"
            },
            {
              name: "MAVEN (2013)",
              time: "2013 - 2026",
              desc: "Mars once had a thick atmosphere, rivers, and lakes — so where did it all go? I am searching for the answer to the mystery of how the solar wind gradually stripped away Mars's atmosphere.",
              img: "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia18/pia18811/PIA18811.tif?w=2048",
              hash: "#/mars/maven"
            },
            {
              name: "InSight Landers (2018)",
              time: "2018 - 2022",
              desc: "I listened to the heart of Mars, hearing hundreds of “marsquakes” — the first time anyone had ever heard the sounds from inside a planet.",
              img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/PIA22743-Mars-InSightLander-ArtistConcept-20181024.jpg/960px-PIA22743-Mars-InSightLander-ArtistConcept-20181024.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
              hash: "#/mars/insightlanders"
            },
            {
              name: "Mars 2020 / Perseverance & Ingenuity (2020)",
              time: "2020 - Present",
              desc: "I am a tiny helicopter weighing just 1.8 kilograms. But I was the first aircraft to fly on another planet — in Mars's thin atmosphere, where flying was almost impossible.",
              img: "https://upload.wikimedia.org/wikipedia/commons/5/58/Mars_helicopter_on_sol_46.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled",
              hash: "#/mars/mars2020"
            },
            {
              name: "Perseverance (2021)",
              time: "2021 - Present",
              desc: "I am drilling into rocks, collecting samples, and leaving them on the Martian surface — one day, another spacecraft may come and bring them back to Earth.",
              img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Perseverance-Selfie-at-Rochette-Horizontal-V2.gif/960px-Perseverance-Selfie-at-Rochette-Horizontal-V2.gif?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
              hash: "#/mars/perseverance"
            }
          ].map((card, idx) => (
            <div 
              key={idx}
              className="w-full h-auto md:min-h-[360px] bg-[#222225] border-3 border-white rounded-none overflow-hidden flex flex-col-reverse md:flex-row justify-between transition-all duration-200 group shadow-[8px_8px_0px_0px_#ffffff]"
            >
              {/* Left Column: Info & Button */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow md:w-1/2">
                <div>
                  <h3 className="text-[28px] sm:text-[36px] md:text-[40px] font-black uppercase text-white mb-2 tracking-tight leading-tight">
                    {card.name}
                  </h3>
                  <span className="text-[15px] sm:text-[16px] font-black text-[#ff6b4a] uppercase tracking-widest mb-4 block border-l-3 border-[#ff6b4a] pl-2.5 py-0.5">
                    {card.time}
                  </span>
                  <p className="text-[#e0e0e0] text-[18px] sm:text-[20px] md:text-[22px] font-medium leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    onClick={() => window.location.hash = card.hash}
                    className="w-full sm:w-auto text-center py-3 px-6 bg-[#ff6b4a] hover:bg-[#ff7b5d] text-[14px] font-black uppercase border-2 border-white text-white shadow-[4px_4px_0px_0px_#ffffff] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
                  >
                    Read My Story
                  </button>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 self-start sm:self-auto px-4 py-2 bg-black border-2 border-white/60 rounded-none text-[13px] font-black uppercase tracking-wider text-white shadow-[3px_3px_0px_0px_#ffffff]">
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
              <div className="md:w-1/2 h-52 md:h-full relative overflow-hidden shrink-0 border-b-3 md:border-b-0 md:border-l-3 border-white">
                <img 
                  src={card.img}
                  alt={card.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
