"use strict";
/*
'use client';

import React, { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import PieChartData from "@/components/Piechart";
import { useAutoplayProgress} from "@/components/EmblaCarouselAutoplayProgress";
import SimpleBarChart from "@/components/BarChart";
import BasicHeatmap from "@/components/BasicHeatMap";
import Autoplay from "embla-carousel-autoplay";

const FeaturesSection = (props: { slides: never; options: never; }) => {
    const { slides, options } = props
    const progressNode = useRef<HTMLDivElement>(null)
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: false, delay: 3000 })
    ])


    const { showAutoplayProgress } = useAutoplayProgress(emblaApi, progressNode)

  return (
      <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
              <div className="embla__slide"><PieChartData /></div>
              <div className="embla__slide"><SimpleBarChart /></div>
              <div className="embla__slide"><BasicHeatmap/></div>
          </div>
            </div>
          <div
              className={`embla__progress`.concat(
                  showAutoplayProgress ? '' : ' embla__progress--hidden'
              )}
          >
              <div className="embla__progress__bar" ref={progressNode} />
          </div>
      </div>
  );
};

export default FeaturesSection;
*/
