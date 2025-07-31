export default function LandingPage() {
  return (
    <>
      {/* <div className="h-[100dvh] p-8">
        <div className="grid  grid-cols-5 grid-rows-6 gap-0  w-full relative h-full rounded-[25px] flex-col items-center justify-center">
          <div className=" col-span-2 row-span-3 z-0 col-start-4 row-start-4  h-full rounded-bl-4xl rounded-tr-4xl rounded-br-4xl bg-[#2264f1] p-8 flex flex-col gap-4"></div>
          <div className=" col-span-2  z-40 row-span-3  col-start-4 row-start-4  bg-white h-full  rounded-2xl p-8 flex flex-col gap-4">
            <h1 className="text-[3rem] font-[500] tracking-tighter w-[90%]">
              Transforming ideas into impactful digital experiences.
            </h1>
            <p className="text-[#9ea2ae] text-[1.5rem] w-[80%] tracking-tighter">
              We bring ideas to life with elegant design and smart technology,
              creating digital experiences that captivate and deliver real
              impact.
            </p>
            <button className="bg-[#1e1e1e] text-white mt-[2rem] w-fit px-8 py-2 rounded-[7px] cursor-pointer">
              Contact Us
            </button>
          </div>
          <div className="col-span-3 row-span-3 rounded-tl-2xl h-full bg-[#2264f1] "></div>
          <div className="col-span-2 row-span-3 h-full col-start-4 rounded-br-2xl rounded-tr-2xl bg-[#2264f1]"></div>

          <div className="col-span-3 row-span-3 col-start-1 rounded-bl-2xl rounded-br-2xl  row-start-4 bg-[#2264f1] h-full"></div>
        </div>
      </div> */}

      <div className="h-[100vh] flex gap-4 p-8">
        <div className="h-full w-[50%] flex flex-col relative gap-4"><div className="w-full h-[30%] flex items-center justify-center">
            <h1 className="text-[8rem] font-[500] tracking-tighter text-[#1e1e1e] uppercase">Weblocators</h1>
          </div>
          <div className="bg-[#1e1e1e] text-white h-[70%] rounded-2xl p-8 flex flex-col justify-end gap-4 border-[2px] relative">
            <div className="absolute w-full top-0 left-0 p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white"></div>
                <h1 className="tracking-tighter font-[500]">Welcome</h1>
              </div>
              <h1>We build websites</h1>
            </div>
            <h1 className="text-[3rem] font-[500] tracking-tighter">
              Transforming ideas into impactful digital experiences.
            </h1>
            <p className="text-[#9ea2ae] text-[1.5rem] w-[80%] tracking-tighter">
              We bring ideas to life with elegant design and smart technology,
              creating digital experiences that captivate and deliver real
              impact.
            </p>
            <button className="bg-[#fff] text-[#1e1e1e] mt-[2rem] w-fit px-8 py-2 rounded-[7px] cursor-pointer">
              Contact Us
            </button>
          </div>
          
        </div>
        <div className="h-full w-[50%] bg-[url('/5.jpg')] bg-center bg-cover rounded-[25px]"></div>
      </div>
    </>
  );
}
