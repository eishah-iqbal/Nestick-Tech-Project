import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = "hover:text-[#a6140c] transition-colors duration-200 cursor-pointer";

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl text-[#a6140c] tracking-wide"> Nestick College </h1>

      {/* Desktop */}
      <div className="hidden md:flex gap-6">
        <Link className={linkClass} to="/">Home</Link>
        <Link className={linkClass} to="/faculty">Faculty</Link>
        <Link className={linkClass} to="/programs">Programs</Link>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-4 md:hidden gap-3">
          <Link className={linkClass} onClick={() => setOpen(false)} to="/">Home</Link>
          <Link className={linkClass} onClick={() => setOpen(false)} to="/faculty">Faculty</Link>
          <Link className={linkClass} onClick={() => setOpen(false)} to="/programs">Programs</Link>
        </div>
      )}
    </nav>
  );
}