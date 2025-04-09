"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";
import Link from "next/link";

const Header = () => {
  let pathname = usePathname() || "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="flex justify-center items-center mt-8 sticky top-0 z-[100]">
      <div className="border border-stone-800/90 p-[0.4rem] rounded-full bg-stone-900/80 backdrop-blur-md max-w-min">
        <nav className="flex gap-2 relative justify-center w-full z-[100] rounded-lg">
          {navItems.map((item, index) => {
            const isActive = item.path === pathname;

            return (
              <Link
                key={item.path}
                className={`px-4 py-2 rounded-md text-md relative duration-300 ease-in lg:text-xl ${
                  isActive ? "text-zinc-100" : "text-zinc-400"
                }`}
                data-active={isActive}
                href={item.path}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span>{item.name}</span>
                {item.path === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-stone-600 rounded-full -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.1,
                      stiffness: 90,
                      duration: 0.3,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Header;
