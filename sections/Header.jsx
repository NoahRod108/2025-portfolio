import React from "react";

const Header = () => {
  return (
    // <header className="flex justify-center items-center relative top-3">
    <header className="fixed left-1/2 top-10 z-[999] -translate-x-1/2 w-full md:w-auto">
      <nav className="flex justify-around gap-1 p-2 border border-white/15 rounded-full bg-white/10 backdrop-blur-md">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Projects
        </a>
        <a href="#" className="nav-item bg-white text-[--background]">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
