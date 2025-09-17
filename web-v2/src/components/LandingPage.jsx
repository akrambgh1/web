// import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  return (
    <>
      <section className="w-full h-screen max-md:h-[60vh] max-lg:h-[90vh] max-lg:mb-[2rem]">
        <div className="w-full h-full relative items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-start bg-black overflow-hidden">
            <div className="flex flex-col gap-4 h-full max-2xl:w-[100%] max-md:w-full lg:w-[50%] px-10">
              <div className="flex flex-col h-full justify-center z-10 gap-4 max-md:gap-2 text-white tracking-tighter max-lg:items-center max-lg:text-center">
                <h1 className="text-[4.5rem] max-md:text-[1.75rem] max-xl:text-[3rem]">
                  Bring your ideas to life with{" "}
                  <i className="bg-lime-300 px-4 text-black font-[500]">WEBLOCATORS</i>
                </h1>
                <p className="max-md:text-[.75rem] text-[1.5rem] text-[#bdbfc7] max-md:text-[#e7e7e7]">
                  We bring ideas to life with elegant design and smart
                  technology, creating digital experiences that captivate and
                  deliver real impact.
                </p>
                {/* <h1 className="bg-[#ffffff] flex items-center gap-4 text-black cursor-pointer w-fit p-4 text-[1.25rem] px-4 py-2 mt-3 max-md:text-[1rem] rounded-[4px] group">
                  
                  contatus@weblocators.com
                  <ArrowRight className="group-hover:rotate-45 rotate-45"></ArrowRight>
                </h1> */}
              </div>
            </div>
            <div className="absolute md:bottom-10 md:right-8 bottom-0 right-4 flex items-center z-10 gap-2">
              <h1 className="tracking-tighter text-[2rem] max-md:text-[1rem]">
                Scroll down
              </h1>
              <ArrowDown className="border-2 border-black rounded-full animate-bounce"></ArrowDown>
            </div>

            <div className="absolute bottom-[-50%] left-[50%] translate-x-[-50%] w-[125%] max-lg:w-[200%] h-[75%] max-md:h-[85%] rounded-[140%] bg-white blur-3xl z-4 opacity-100"></div>

            <div className="absolute bottom-[-50%] left-[50%] translate-x-[-50%] max-lg:w-[170%] w-full h-[95%] max-md:h-[100%] rounded-[140%] bg-indigo-400 blur-3xl z-3 opacity-60"></div>

            <div className="absolute bottom-[-50%] left-[50%] translate-x-[-50%] max-lg:w-[170%] w-full h-[105%] max-md:h-[120%] rounded-[140%] bg-[#2264f1] blur-3xl z-2 opacity-40"></div>

            <div className="absolute bottom-[-50%] left-[50%] translate-x-[-50%] max-lg:w-[170%] w-full h-[120%] max-md:h-[130%] rounded-[140%] bg-[#0f0063] blur-3xl opacity-60 z-1"></div>
          </div>
        </div>
      </section>
    </>
  );
}
