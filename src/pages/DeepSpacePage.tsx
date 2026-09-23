import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

export const DeepSpacePage: React.FC = () => {
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
            className="inline-flex items-center space-x-2.5 text-[15px] font-black uppercase text-white bg-black border-2 border-white px-4 py-2 shadow-[3px_3px_0px_0px_#ffffff] hover:bg-[#2997ff] hover:text-black transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[3]" />
            <span>Back to Explorer</span>
          </button>
        </div>

        {/* Header Block */}
        <div className="max-w-3xl mb-12 border-l-6 border-[#2997ff] pl-6 py-2 bg-black border-2 border-white p-6 shadow-[6px_6px_0px_0px_#ffffff]">
          <span className="text-[14px] font-black text-[#2997ff] uppercase tracking-wider block mb-1">
            EXPLORATION ARCHIVE
          </span>
          <h1 className="text-[48px] md:text-[64px] font-black tracking-tighter text-white uppercase leading-none">
            Deep Space
          </h1>
        </div>

        {/* 13 Deep Space Mission Cards Stacked */}
        <div className="flex flex-col items-center gap-8 w-full max-w-6xl mx-auto">
          {[
            {
              name: "TIROS-1",
              time: "1960",
              desc: "I was the first instrument to capture images of Earth’s clouds from space — before me, no one knew it was possible to see storms coming from above.",
              img: "https://www.sri.com/wp-content/uploads/2021/11/TIROS-1-weather-satellite.jpg",
              hash: "#/deep-space/tiros1"
            },
            {
              name: "Mariner Program",
              time: "1962–1973",
              desc: "We are 10 siblings who flew past Venus, Mars, and Mercury one after another — we were the first to show humanity what other planets looked like up close.",
              img: "https://upload.wikimedia.org/wikipedia/commons/0/02/Mariner_5.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
              hash: "#/deep-space/marinerprogram"
            },
            {
              name: "Pioneer 10 & 11",
              time: "1972–1997",
              desc: "We were the first to cross the asteroid belt and capture images of Jupiter and Saturn. And attached to us is a golden plaque — if extraterrestrial life ever finds us, they will know where we came from.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHt2aJCzmgrBsEacizamxXaFUv29hfV17WqLQXs8g7g&s=10",
              hash: "#/deep-space/pioneer10and11"
            },
            {
              name: "Voyager 1 & 2",
              time: "1977–Present",
              desc: "We are still flying, the farthest human-made objects ever to travel through the Solar System. With us is a golden record containing Earth’s music, languages, and sounds, in case someone ever finds us.",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUx20_mnEqD9w4LEkGQVL21Aa2sf6hZhOXBFahOICkzQ&s=10",
              hash: "#/deep-space/voyager1and2"
            },
            {
              name: "Hubble Space Telescope",
              time: "1990–Present",
              desc: "I have captured images of galaxies in space whose light has traveled for billions of years — as if I were looking back through time.",
              img: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Hubble_2009_close-up_2.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=original",
              hash: "#/deep-space/hubbletelescope"
            },
            {
              name: "Chandra X-ray Observatory",
              time: "1999–Present",
              desc: "I see what the human eye cannot — the fiery regions around black holes, the remnants of dead stars exploding. The invisible universe is an open book to me.",
              img: "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/missions/Chandra20years.webp?w=1536",
              hash: "#/deep-space/chandraobservatory"
            },
            {
              name: "New Horizons",
              time: "2006–Present",
              desc: "I flew for nine years just to capture the first close-up images of Pluto — and those images revealed a massive heart-shaped icy feature!",
              img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/15-011a-NewHorizons-PlutoFlyby-ArtistConcept-14July2015-20150115.jpg/960px-15-011a-NewHorizons-PlutoFlyby-ArtistConcept-14July2015-20150115.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
              hash: "#/deep-space/newhorizons"
            },
            {
              name: "Kepler Space Telescope",
              time: "2009–2018",
              desc: "I have stared at millions of stars, watching for just one thing — when a star’s light dims slightly. That’s how I discovered thousands of new planets beyond our Solar System!",
              img: "https://images-assets.nasa.gov/image/PIA18904/PIA18904~large.jpg?w=1920&h=1536&fit=clip&crop=faces%2Cfocalpoint",
              hash: "#/deep-space/keplertelescope"
            },
            {
              name: "Juno",
              time: "2011–2025",
              desc: "I fly over Jupiter’s poles, and below me, I see massive storms — including one larger than Earth that has been raging for hundreds of years!",
              img: "https://assets.science.nasa.gov/dynamicimage/assets/science/cds/general/images/2024/03/pia21770large.jpg?w=1920&h=1280&fit=crop&crop=faces%2Cfocalpoint",
              hash: "#/deep-space/juno"
            },
            {
              name: "MESSENGER",
              time: "2011–2015",
              desc: "I was the first spacecraft to orbit Mercury — a planet where one side reaches 400°C, while ice hides inside dark craters!",
              img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/MESSENGER_-_spacecraft_at_mercury_-_atmercury_lg.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
              hash: "#/deep-space/messenger"
            },
            {
              name: "OSIRIS-REx / OSIRIS-APEX",
              time: "2016–Present",
              desc: "I touched an asteroid, collected its rocks, and brought them back to Earth — and now I’m heading toward another asteroid that may one day pass close to Earth.",
              img: "https://science.nasa.gov/wp-content/uploads/2023/10/230924-osiris-apex-0001.jpg",
              hash: "#/deep-space/osirisrexapex"
            },
            {
              name: "James Webb Space Telescope",
              time: "2021–Present",
              desc: "I can see light from so far away that it comes from the early universe, from the time when the first galaxies were being born — I am almost looking back to the beginning of time.",
              img: "https://science.nasa.gov/wp-content/uploads/2024/05/jwst_artist_concept_0.png",
              hash: "#/deep-space/jameswebbtelescope"
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
                  <span className="text-[15px] sm:text-[16px] font-black text-[#2997ff] uppercase tracking-widest mb-4 block border-l-3 border-[#2997ff] pl-2.5 py-0.5">
                    {card.time}
                  </span>
                  <p className="text-[#e0e0e0] text-[18px] sm:text-[20px] md:text-[22px] font-medium leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    onClick={() => window.location.hash = card.hash}
                    className="w-full sm:w-auto text-center py-3 px-6 bg-[#0066cc] hover:bg-[#0071e3] text-[14px] font-black uppercase border-2 border-white text-white shadow-[4px_4px_0px_0px_#ffffff] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none cursor-pointer"
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
