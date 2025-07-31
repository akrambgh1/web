
export default function Navbar() {
  return (
    <>
      <div className="w-full flex items-center justify-center p-4 sticky top-2 z-[9999]">
          <div className="w-fit border-[1px] bg-[#ffffff] rounded-[10px] h-full px-12 py-2 flex items-center justify-between">
              <ul className="flex gap-4">
                <li className="cursor-pointer tracking-tighter">Home</li>
                <li className="cursor-pointer tracking-tighter">Contact</li>
                <li className="cursor-pointer tracking-tighter">About</li>
              </ul>
          </div>
      </div>
    </>
  )
}
