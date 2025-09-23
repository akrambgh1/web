import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <>
      <section><h1 className="text-[2rem] tracking-tighter text-[#2264f1] sm:text-[3rem] w-[100%] shrink-0 mb-[3rem] md:mb-[4rem] px-[2rem] max-2xl:px-[3rem] max-md:px-4">
          [Our Pricing]
        </h1>
      <section className="h-fit my-[2rem] w-full flex items-center justify-center px-12 max-md:px-4 gap-4 max-lg:flex-col mt-[5rem]">
         
        <div className="p-4 justify-center md:w-[45%] h-[24rem] flex flex-col gap-8 border border-[#eee] rounded-[10px] bg-[#f9fbfc]">
         <h1 className="text-xl   md:text-2xl font-bold mb-6">Pricing & Project Quotes</h1>
          <p className="mb-3 ">
            At WebLocators, every project is unique. We believe pricing
            should reflect your goals, not just a list of services.
            That’s why we offer <br /> <strong className="text-[#2264f1]">custom quotes</strong> based on your needs, timeline, and scope.
          </p>
        </div>

        <div className="p-10 justify-center md:w-[45%] h-[28rem] flex flex-col gap-8 border bg-[#111111] text-white border-[#eee] rounded-[10px]"><h2 className="text-lg md:text-2xl font-semibold"> What Influences the Price?</h2>
                    <div>
              
              <ul className="list-disc list-inside mt-2 space-y-2">
                <li>Number of pages or features</li>
                <li>Design complexity (UI/UX)</li>
                <li>Backend functionality (CMS, APIs, etc.)</li>
                <li>Deadlines and timeline</li>
                <li>Additional services (branding, SEO, hosting setup)</li>
              </ul>
            </div>
        </div>

        <div className="p-4 justify-center px-8 md:w-[45%] h-[24rem]  flex flex-col gap-8 border border-[#eee] rounded-[10px] bg-[#f9fbfc]"><h2 className="text-lg md:text-2xl font-semibold">How to Get a Quote?</h2>
         <div>
              
              <p className="mt-2">
                Send us a message, and we'll schedule a free discovery call. During the call, we'll listen to your goals, answer your questions, and propose a tailored package that fits your vision.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-4 px-6 py-3 rounded cursor-pointer bg-[#2264f1] text-white hover:bg-blue-700 transition"
              >
               Get in Touch
              </Link>
            </div>
        </div>
      </section></section>
    </>
  );
}
