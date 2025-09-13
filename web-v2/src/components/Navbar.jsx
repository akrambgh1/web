
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";
import { FaInstagram, FaDribbble, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiHome9Fill } from "react-icons/ri";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";

export default function Navbar() {
  const [IsActive, SetIsActive] = useState(false);

  return (
    <>
      <div className="flex flex-col fixed top-[5%] left-[2%] gap-4 w-fit z-[9997]">
        <div
          onClick={() => {
            SetIsActive(!IsActive);
          }}
          className="px-4 py-2 w-[7rem] flex bg-[#1e1e1e] text-white gap-4 items-center rounded-[7px] cursor-pointer select-none"
        >
          <RiMenu3Fill />
          <h1>Menu</h1>
        </div>
        <div
          className={` bg-[#e9e9e9] rounded-[15px] text-[1.25rem] h-fit top-[100%] p-4 gap-4 flex flex-col list-none w-[200%] max-md:w-[150%] transition-all duration-300 ease-in-out ${
            IsActive
              ? "translate-x-0 rotate-0"
              : "translate-x-[-160%] rotate-[-15deg]"
          }`}
        >
          <div className="flex flex-col gap-0.5 bg-[#fff] p-4 rounded-[10px]">
            <h1 className="tracking-tighter px-2 mb-3">Navigation</h1>
            <div className="flex gap-4 items-center cursor-pointer py-2 px-2 hover:bg-[#2264f1] duration-200 transition-all hover:text-[#fff] rounded-[.5rem]">
              <RiHome9Fill className="hover:text-[#fff]" />
              <h1 className="tracking-tighter">Home</h1>
            </div>

            <div className="flex gap-4 items-center cursor-pointer py-2 px-2 hover:bg-[#2264f1] duration-200 transition-all hover:text-[#fff] rounded-[.5rem]">
              <AiOutlineExclamationCircle className="hover:text-[#fff]" />
              <h1 className="tracking-tighter">About us</h1>
            </div>
            <div className="flex gap-4 items-center cursor-pointer py-2 px-2 hover:bg-[#2264f1] duration-200 transition-all hover:text-[#fff] rounded-[.5rem]">
              <RiContactsLine className="hover:text-[#fff]" />
              <h1 className="tracking-tighter">Contact</h1>
            </div>
          </div>
          <ul className="flex flex-col gap-0.5 bg-[#fff] p-4 rounded-[10px]">
            <h1 className="tracking-tighter px-2 mb-3">Socials</h1>
            <div className="flex gap-4 items-center cursor-pointer py-2 px-2 hover:bg-[#2264f1] duration-300 transition-all hover:text-[#fff] rounded-[.5rem]">
              <FaInstagram className="hover:text-[#fff]" />
              <h1 className="tracking-tighter">Instagram</h1>
            </div>
            <div className="flex gap-4 items-center cursor-pointer py-2 px-2 hover:bg-[#2264f1] duration-300 transition-all hover:text-[#fff] rounded-[.5rem]">
              <FaDribbble className="hover:text-[#fff]" />
              <h1 className="tracking-tighter">Dribble</h1>
            </div>
            <div className="flex gap-4 items-center cursor-pointer py-2 px-2 hover:bg-[#2264f1] duration-300 transition-all hover:text-[#fff] rounded-[.5rem]">
              <FaLinkedin className="hover:text-[#fff]" />
              <h1 className="tracking-tighter">Linkedin</h1>
            </div>
            <div className="flex gap-4 items-center cursor-pointer py-2 px-2 hover:bg-[#2264f1] duration-300 transition-all hover:text-[#fff] rounded-[.5rem]">
              <FaTwitter className="hover:text-[#fff]" />
              <h1 className="tracking-tighter">Twitter</h1>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
