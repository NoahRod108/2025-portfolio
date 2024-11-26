import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center items-center relative top-3">
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10">
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
    </div>
  );
};

export default Header;
