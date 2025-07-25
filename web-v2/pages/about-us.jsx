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
import Card from "@/components/Card";
import Paragraph from "@/components/Paragraph";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
  const ref = useRef();
  const refContainer = useRef();
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

  const { scrollYProgress } = useScroll({
    target: refContainer,
  });
  const X = useTransform(scrollYProgress, [0, 1], ["20%", "-55%"]);

  return (
    <>
      <Navbar></Navbar>
      <section
        ref={containerRef}
        data-scroll-container
        className="w-full bg-white"
      >
        <div className="leading-[1.04] h-[80dvh] flex items-center justify-center flex-col relative max-md:h-[40vh]">
          <motion.div
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
            className="flex w-auto"
          >
            <motion.h1
              initial={{ translateY: "100%", rotate: 7 }}
              animate={{ translateY: "0", rotate: 0 }}
              transition={{ ease: easeInOut, duration: 0.75 }}
              viewport={{ amount: 0, once: true }}
              className="text-[9rem] font-[500] tracking-tighter max-md:text-[3rem]"
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
              className="text-[9rem] font-[500] tracking-tighter max-md:text-[3rem]"
            >
              about us
            </motion.h1>
          </motion.div>

          <MotionArrowDown
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: "0%" }}
            transition={{ duration: 0.5 }}
            className="absolute translate-x-[-50%] left-[50%] bottom-[5rem] animate-bounceDown text-[5rem] max-md:text-[2rem]"
          />
        </div>

        <div className="w-full h-[80vh] flex gap-16 leading-tight justify-evenly max-xl:flex-col max-xl:h-fit">
          <div className="w-[50%] max-xl:w-full max-xl:items-center max-xl:text-center">
            <Paragraph
              paragraph={
                "We're a team of developers, and creative thinkers driven by one simple goal to help businesses grow online. Whether you're launching a new brand or refreshing an existing one, we craft digital experiences that make an impact."
              }
            ></Paragraph>
          </div>
        </div>

        <section className="h-[100vh] flex flex-col items-end max-xl:h-fit">
          <div className="flex flex-col gap-4 w-[100%]">
            <h1 className="text-[1.5rem] font-[500] tracking-tighter ml-[2.5rem]">
              What we promise!
            </h1>

            <div className="flex border-y-[1px] h-[70vh] border-[#dddfe7] max-xl:flex max-xl:flex-col max-xl:w-full max-xl:h-fit">
              <div className="border-r-[1px] relative p-8 max-xl:h-[50vh] max-xl:border-b-[1px]">
                <h1 className="tracking-tighter text-[1.5rem] text-[#9ea2ae] max-md:text-[1rem]">
                  <span className="text-black uppercase font-[500]">
                    Small team, sharp minds.
                  </span>{" "}
                  We stay compact by design — senior thinkers, no filler. Every
                  project gets our full attention, from the first sketch to
                  final delivery.
                </h1>

                <h1 className="absolute bottom-8 left-8 text-[2rem] text-[#9ea2ae]">
                  01
                </h1>
              </div>

              <div className="border-r-[1px] relative p-8 max-xl:h-[50vh] max-xl:border-b-[1px]">
                <h1 className="tracking-tighter text-[1.5rem] text-[#9ea2ae]  max-md:text-[1rem]">
                  <span className="text-black uppercase font-[500]">
                    Built on trust.
                  </span>{" "}
                  We stay compact by design — senior thinkers, no filler. Every
                  project gets our full attention, from the first sketch to
                  final delivery.
                </h1>
                <h1 className="absolute bottom-8 left-8 text-[2rem] text-[#9ea2ae]">
                  02
                </h1>
              </div>

              <div className="border-r-[1px] relative p-8 max-xl:h-[50vh] max-xl:border-b-[1px]">
                <h1 className="tracking-tighter text-[1.5rem] text-[#9ea2ae] max-md:text-[1rem]">
                  <span className="text-black uppercase font-[500]">
                    Depth over flash
                  </span>{" "}
                  We chase meaning, not just aesthetics. Great design is
                  substance dressed well — strategic, thoughtful, and never
                  superficial.
                </h1>
                <h1 className="absolute bottom-8 left-8 text-[2rem] text-[#9ea2ae]">
                  03
                </h1>
              </div>

              <div className="border-r-[1px] relative p-8 max-xl:h-[50vh] max-xl:border-b-[1px]">
                <h1 className="tracking-tighter text-[1.5rem] text-[#9ea2ae] max-md:text-[1rem]">
                  <span className="text-black uppercase font-[500]">
                    No black box
                  </span>{" "}
                  You’re not a spectator. You’re part of the process. We work in
                  the open, making space for dialogue, iteration, and shared
                  discovery.
                </h1>
                <h1 className="absolute bottom-8 left-8 text-[2rem] text-[#9ea2ae] max-md:text-[1rem]">
                  04
                </h1>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative h-[70dvh] max-md:h-[100vh] mt-[5rem]"
          style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <Footer></Footer>
        </section>
      </section>
    </>
  );
}
