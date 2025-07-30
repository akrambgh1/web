
export default function Navbar() {
  return (
    <>
      <div className="w-full flex items-center justify-center p-4 fixed top-2 z-[9999]">
          <div className="w-[70%] border-[1px] bg-[#ffffff] rounded-[10px] h-full px-12 py-2 flex items-center justify-between">
              <h1 className="tracking-tighter font-[500] text-[2rem]">Weblocators</h1>
              <ul className="flex gap-4">
                <li className="cursor-pointer tracking-tighter">Contact</li>
                <li className="cursor-pointer tracking-tighter">About</li>
              </ul>
          </div>
      </div>
    </>
  )
}
