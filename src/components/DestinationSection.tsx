import React from 'react';
import { CoverFlowCarousel } from './ui/3-d-coverflow-carousel';

export const DestinationSection: React.FC = () => {
  return (
    <section 
      id="destinations" 
      className="w-full bg-[#1c1c1e] text-white py-[80px] px-6 border-b-4 border-white relative"
    >
      <div className="max-w-[1200px] w-full mx-auto">
        
        {/* Header */}
        <div className="max-w-[800px] mb-12 border-l-6 border-[#2997ff] pl-6 py-4 bg-black/90 border-3 border-white p-6 shadow-[6px_6px_0px_0px_#ffffff]">
          <span className="text-[13px] font-black text-[#2997ff] uppercase tracking-wider block mb-2">
            PLANETARY REACH
          </span>
          <h2 className="text-[32px] sm:text-[42px] md:text-[50px] font-black leading-none tracking-tighter text-white uppercase mb-4">
            WHERE DO YOU WANT TO EXPLORE?
          </h2>
          <p className="text-[15px] sm:text-[16px] font-medium leading-relaxed text-[#e0e0e0]">
            NASA hardware is distributed across drastically different cosmic frontiers. Each location tested materials, communication latency, and autonomous survival against distinct physical extremes.
          </p>
        </div>

        {/* 3D Coverflow Showcase Carousel Centerpiece */}
        <div className="mt-8">
          <CoverFlowCarousel />
        </div>

      </div>
    </section>
  );
};
