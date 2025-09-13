/* eslint-disable no-unused-vars */
import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { RiArrowDownDoubleLine } from "react-icons/ri";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

export default function AboutUs() {
  // ✅ use one ref for both LocomotiveScroll and useScroll
  const containerRef = useRef(null);

  const [height, setHeight] = useState(0);

  const MotionArrowDown = motion(RiArrowDownDoubleLine);

  // ✅ initialize LocomotiveScroll
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

  // ✅ useScroll now targets the same ref attached to the DOM
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Example transform (you can use it on any motion.div)
  const X = useTransform(scrollYProgress, [0, 1], ["20%", "-55%"]);

  return (
    <>
      <Helmet>
        <title>About Weblocators | Professional Web Agency</title>
        <meta
          name="description"
          content="Learn about Weblocators — a modern web agency offering design, development, and digital strategy. Meet the team behind our success."
        />
      </Helmet>

      {/* attach containerRef here */}
      <section
        ref={containerRef}
        data-scroll-container
        className="w-full bg-white z-99999999999"
      >
        {/* example animated element with scroll */}
        
        <div className="h-[100dvh] w-full flex flex-col gap-8 items-center p-20 max-md:p-4 mb-[5rem]">
          <div className="h-1/2 w-[80%] flex gap-4 max-md:flex-col max-md:w-full">
            <div className="w-[60%] h-full bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)),url('/6.webp')] bg-center bg-cover rounded-[15px] max-md:w-full relative p-8 flex flex-col justify-between">
              <p className="text-[#ffffff] font-[500] tracking-tighter text-[3rem]">
                Who we are
              </p>
              <p className="text-[#ffffff] font-[500] tracking-tighter text-[1.15rem] w-[80%]">
                We’re a focused team of designers, developers, and strategists
                who believe good design is about more than just looking good
                it’s about creating experiences that work, endure, and connect.
                We stay small to stay sharp. No fluff, no filler. Just people
                who care deeply about the work.
              </p>
            </div>

            <div className="w-[40%] h-full bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)),url('/4.webp')] bg-center bg-cover rounded-[15px] max-md:w-full relative p-8 flex flex-col justify-between">
              <p className="text-[#ffffff] font-[500] tracking-tighter text-[3rem]">
                Beyond the Work
              </p>
              <p className="text-[#ffffff] font-[500] tracking-tighter text-[1.15rem] w-[80%]">
                We’re curious by nature always learning, always refining our
                craft. Outside of client projects, we explore, experiment, and
                stay current with the tools and technologies shaping tomorrow’s
                web.
              </p>
            </div>
          </div>

          <div className="h-1/2 w-[80%] flex gap-4 max-md:flex-col max-md:w-full">
            <div className="w-[40%] h-full bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)),url('/3.webp')] bg-center bg-cover rounded-[15px] max-md:w-full relative p-8 flex flex-col justify-between">
              <p className="text-[#ffffff] font-[500] tracking-tighter text-[3rem]">
                How We Work
              </p>
              <p className="text-[#ffffff] font-[500] tracking-tighter text-[1.15rem] w-[85%]">
                Our process is collaborative, transparent, and purpose-driven.
                We don’t disappear into a black box and come back with a
                “reveal.” Instead, we work with you step by step, idea by idea
                to build something meaningful and useful. We ask questions, we
                listen hard, and we design with intent.
              </p>
            </div>

            <div className="w-[60%] h-full bg-[linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)),url('/6.jpg')]  bg-center bg-cover rounded-[15px] max-md:w-full relative p-8 flex flex-col justify-between">
              <p className="text-[#ffffff] font-[500] tracking-tighter text-[3rem]">
                Our Philosophy
              </p>
              <ol className="text-[#ffffff] font-[500] tracking-tighter text-[1.15rem] w-[80%]">
                <li>
                  Partnership over service. We’re not just a vendor we’re your
                  creative partner.
                </li>
                <li>
                  Less but better. Every detail has a purpose. Nothing is
                  ornamental.
                </li>
                <li>
                  People-first design. We design for real people with real
                  needs.
                </li>
                <li>
                  Iteration beats assumption. We refine through collaboration,
                  not guesswork.
                </li>
              </ol>
            </div>
          </div>
        </div>

        <section className="h-[100vh] flex flex-col items-end max-xl:h-fit mt-[5rem]">
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
                  We stay compact by design senior thinkers, no filler. Every
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
                  We stay compact by design senior thinkers, no filler. Every
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
                  substance dressed well strategic, thoughtful, and never
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
          <Footer />
        </section>
      </section>
    </>
  );
}
