import React from "react";
import um from "../../../assets/schools/um.svg";
import harvard from "../../../assets/schools/harvard.svg";
import osu from "../../../assets/schools/osu.svg";
import mit from "../../../assets/schools/mit.svg";
import yale from "../../../assets/schools/yale.svg";
import SvgMarquee from "../../../components/SvgMarquee";

export default function Marquee() {
  const svgArr = [um, harvard, osu, mit, yale];

  return (
    <section className="container my-5 p-0">
      <SvgMarquee svgs={svgArr} />
    </section>
  );
}
