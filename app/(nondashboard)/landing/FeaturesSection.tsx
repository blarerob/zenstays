'use client';

import React from "react";
import useEmblaCarousel from 'embla-carousel-react'
import PieChartData from "@/components/Piechart";
import SimpleBarChart from "@/components/BarChart";
import BasicHeatmap from "@/components/BasicHeatMap";

const FeaturesSection = (props: { slides: never; options: never; }) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)


  return (
      <section className="embla">
          <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
              <div className="embla__slide"><PieChartData /></div>
              <div className="embla__slide"><SimpleBarChart /></div>
              <div className="embla__slide"><BasicHeatmap/></div>
          </div>
            </div>
          </section>
  );
};

export default FeaturesSection;
