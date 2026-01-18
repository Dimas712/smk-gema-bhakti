"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Instagram, Youtube } from "lucide-react"

const profilMenu = [
  { label: "Sejarah Singkat", link: "/profil/sejarah" },
  { label: "Visi & Misi", link: "/profil/visi-misi" },
  { label: "Guru & Staff", link: "/profil/guru-staf" },
  { label: "Fasilitas", link: "/profil/fasilitas" },
  { label: "Tata Tertib Peserta Didik", link: "/profil/tata-tertib" },
]

const menuList = [
  { label: "Kegiatan", link: "/kegiatan" },
  { label: "Galeri", link: "/galeri" },
  { label: "Kontak", link: "/kontak" },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [profilOpen, setProfilOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => pathname === path
  const isProfilActive = pathname.startsWith("/profil")

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-green-700/90 shadow-lg">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">

        {/* LEFT - Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/smk.jpg"
            alt="Logo SMK Gema Bhakti"
            width={44}
            height={44}
            className="rounded-full object-contain"
            priority
          />
          <span className="font-semibold text-lg tracking-wide hidden sm:block text-white">
            SMK Gema Bhakti 1 Jasinga
          </span>
        </Link>

        {/* HAMBURGER (Mobile) */}
        <button
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* CENTER - Menu */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            bg-green-700 md:bg-transparent
            md:flex md:items-center md:gap-8
            ${open ? "block" : "hidden"} md:block
          `}
        >

          {/* PROFIL */}
          <div className="md:relative">
            <button
              onClick={() => setProfilOpen(!profilOpen)}
              className={`flex items-center gap-1 px-6 py-3 md:p-0 transition
                ${isProfilActive
                  ? "text-yellow-300 font-semibold"
                  : "text-white hover:text-yellow-300"}
              `}
            >
              Profil
              <span className={`text-xs transition ${profilOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            {/* Mobile submenu */}
            <div className={`md:hidden ${profilOpen ? "block" : "hidden"}`}>
              {profilMenu.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className={`block pl-10 pr-6 py-2 text-sm transition
                    ${pathname === item.link
                      ? "text-yellow-300 font-semibold"
                      : "text-white/90"}
                  `}
                  onClick={() => {
                    setProfilOpen(false)
                    setOpen(false)
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop dropdown */}
            <div
              className={`
                hidden md:block absolute top-full left-0 mt-3
                bg-white text-gray-800 rounded-2xl shadow-xl w-64
                transition-all duration-200
                ${profilOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"}
              `}
            >
              {profilMenu.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className={`block px-5 py-3 text-sm transition
                    ${pathname === item.link
                      ? "bg-gray-100 font-semibold text-blue-600"
                      : "hover:bg-gray-100"}
                  `}
                  onClick={() => setProfilOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Menu lain */}
          {menuList.map((menu, i) => (
            <Link
              key={i}
              href={menu.link}
              className={`block px-6 py-3 md:p-0 transition
                ${isActive(menu.link)
                  ? "text-yellow-300 font-semibold"
                  : "text-white hover:text-yellow-300"}
              `}
              onClick={() => setOpen(false)}
            >
              {menu.label}
            </Link>
          ))}

          {/* 🔥 PPDB BUTTON */}
          <Link
            href="/ppdb"
            className={`
              block mx-6 my-2 md:mx-0 md:my-0
              px-6 py-2 rounded-full text-center font-semibold
              transition
              ${pathname === "/ppdb"
                ? "bg-yellow-400 text-green-900"
                : "bg-yellow-300 text-green-900 hover:bg-yellow-400"}
            `}
            onClick={() => setOpen(false)}
          >
            PPDB
          </Link>

        </nav>

        {/* RIGHT - Social Media */}
        <div className="hidden md:flex items-center gap-4 text-white">
          <a
            href="https://www.instagram.com/smkgema_bhakti"
            target="_blank"
            className="hover:text-yellow-300 transition"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-yellow-300 transition"
          >
            <Youtube size={24} />
          </a>
        </div>

      </div>
    </header>
  )
}

export default Navbar
