/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  easeIn,
  easeInOut,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Polygon } from "coolshapes-react";
import { RiArrowDownDoubleLine } from "react-icons/ri";
import { Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutUs() {
  const ref = useRef();
  const someRef = useRef();
  const [height, setHeight] = useState(0);

  const containerRef = useRef(null);
  const MotionArrowDown = motion(RiArrowDownDoubleLine);

  useEffect(() => {
    if (!containerRef.current) return;

    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      multiplier: 0.02,
      lenisOptions: 0.001,
      class: "is-reveal",
    });

    return () => {
      scroll.destroy();
    };
  }, []);



  return (
    <section
      ref={containerRef}
      data-scroll-container
      className="w-full bg-white"
    >
      <div className="leading-[1.04] h-[100dvh] flex items-center justify-center flex-col relative">
        <motion.div
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
          className="flex w-auto"
        >
          <motion.h1
            initial={{ translateY: "100%", rotate: 7 }}
            animate={{ translateY: "0", rotate: 0 }}
            transition={{ ease: easeInOut, duration: 0.75 }}
            viewport={{ amount: 0, once: true }}
            className="text-[11rem] font-[500] tracking-tighter"
          >
            Learn more
          </motion.h1>
        </motion.div>
        <motion.div
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
          className="flex w-auto mt-[-2%]"
        >
          <motion.h1
            initial={{ translateY: "100%", rotate: 7 }}
            animate={{ translateY: "0", rotate: 0 }}
            transition={{ ease: easeInOut, duration: 0.75, delay: ".2" }}
            viewport={{ amount: 0, once: true }}
            className="text-[11rem] font-[500] tracking-tighter"
          >
            about us
          </motion.h1>
        </motion.div>

        <MotionArrowDown
          initial={{ opacity: 0, translateY: "100%" }}
          animate={{ opacity: 1, translateY: "0%" }}
          transition={{ duration: 0.5 }}
          size={64}
          className="absolute translate-x-[-50%] left-[50%] bottom-[10rem] animate-bounceDown"
        />
      </div>

      <div className="w-full h-[100dvh]">

      </div>

    </section>
  );
}
