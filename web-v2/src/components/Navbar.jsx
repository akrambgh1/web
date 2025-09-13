import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`w-full text-white flex flex-col fixed p-4 left-2 top-2 z-[9999]
      transition-transform duration-500 ease-out
      ${visible ? 'translate-y-0' : '-translate-y-full'}`} // Slide effect
    >
      <div
        className={`w-fit border bg-[#1e1e1e] rounded-[10px]
        transition-all duration-500 ease-out
        ${open ? 'scale-110' : 'scale-100'}`}
        onMouseLeave={() => setOpen(false)}
      >
        {/* Button area */}
        <div
          className={`flex text-white ${open ? 'opacity-0 py-3' : 'opacity-100 py-3'} gap-2 cursor-pointer select-none items-center px-6`}
          onClick={() => setOpen(true)}
        >
          <Menu />
          <span>Menu</span>
        </div>

        {/* List expands/collapses */}
        <ul
          className={`flex flex-col gap-2 px-6 text-[1.2rem] font-[500] overflow-hidden
          transition-all duration-500 ease-out 
          ${open ? 'max-h-30 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About-us">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
