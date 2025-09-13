
import { Link } from "react-router-dom"; // or next/link if Next.js

export default function Pricing() {
    return (
       <section className=" relative md:h-[70vh] bg-white  flex flex-col justify-between text-white py-4 px-2">
  <div className="flex flex-col md:h-[60vh] rounded-2xl bg-[#1e1e1e] md:flex-row items-center justify-around w-full px-2 md:px-8 md:gap-10 gap-0">
    
    {/* Left Content */}
    <div className="w-full md:w-[55%] text-neutral-100 px-2 sm:px-8 py-4">
      <h1 className="text-xl  md:text-3xl font-bold mb-6">Pricing & Project Quotes</h1>
      <p className="mb-6">
        At WebLocators, every project is unique. We believe pricing should reflect your goals, not just a list of services.
        That’s why we offer <strong>custom quotes</strong> based on your needs, timeline, and scope.
      </p>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg md:text-xl font-semibold"> What Influences the Price?</h2>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Number of pages or features</li>
            <li>Design complexity (UI/UX)</li>
            <li>Backend functionality (CMS, APIs, etc.)</li>
            <li>Deadlines and timeline</li>
            <li>Additional services (branding, SEO, hosting setup)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg md:text-xl font-semibold">How to Get a Quote?</h2>
          <p className="mt-2">
           Send us a message, and we'll schedule a free discovery call. During the call, we'll listen to your goals, answer your questions, and propose a tailored package that fits your vision.
          </p>
          <Link
            to="/contact"
            className="inline-block mt-4 px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>

    {/* Right Illustration */}
    <div className="w-full md:w-[40%] h-[40vh] md:h-[70vh] bg-[url('/currencies-30.svg')] bg-center bg-cover rounded-[10px]"></div>
  </div>

  {/* Footer */}
\
</section>

  );
}
