"use client";

import { useState, useEffect, useRef } from "react";
import ProfilDropdown from "../../component/ProfilDropdown";

export default function HeaderGuru() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
  <header
    className="
      fixed top-0 left-0 right-0
      h-[64px]
      bg-green-500
      flex items-center justify-end
      px-6 text-white
      z-40
    "
  >
      <div className="relative" ref={dropdownRef}>
        {/* Trigger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-3 focus:outline-none cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-white text-green-600 flex items-center justify-center font-bold">
            D
          </div>
          <span className="text-sm font-semibold hidden md:block">
            Dimas Alip
          </span>
        </button>

        {/* Dropdown */}
        <ProfilDropdown open={open} onClose={() => setOpen(false)} />
      </div>
    </header>
  );
}
