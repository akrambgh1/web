
export default function LandingPage() {
  return (
    <>
    <div className="h-[100dvh] p-8">
      <div className="w-full relative h-full [background:_radial-gradient(circle_at_10%_20%,_#2264f1_0%,_rgb(7,_91,_173)_90%);] rounded-[25px] flex flex-col items-center justify-center">
        
        <div className="absolute bottom-8 right-8 bg-white h-[30rem] w-[50rem] rounded-[25px] p-8 flex flex-col gap-4">
        <h1 className="text-[3rem] font-[500] tracking-tighter w-[90%]">Transforming ideas into impactful digital experiences.</h1>
        <p className="text-[#9ea2ae] text-[1.5rem] w-[80%] tracking-tighter">We bring ideas to life with elegant design and smart technology, creating digital experiences that captivate and deliver real impact.</p>
        <button className="bg-[#1e1e1e] text-white mt-[2rem] w-fit px-8 py-2 rounded-[7px] cursor-pointer">Contact Us</button>
        </div>
      </div>
    </div>
    </>
  )
}
