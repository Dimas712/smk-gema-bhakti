"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Instagram, Youtube, ChevronDown } from "lucide-react"

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
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path) => pathname === path
  const isProfilActive = pathname.startsWith("/profil")

  return (
    <header
      className={`
        fixed top-0 w-full z-50
        transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md py-3"
            : "bg-transparent py-6"
        }
      `}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/smk.jpg"
            alt="Logo"
            width={44}
            height={44}
            className="rounded-full object-contain shadow-md"
            priority
          />
          <span
            className={`font-semibold text-lg tracking-wide hidden sm:block transition ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            SMK Gema BHAKTI 1 JASINGA
          </span>
        </Link>

        {/* Hamburger */}
        <button
          className={`md:hidden text-3xl transition ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menu */}
        <nav
          className={`
            absolute md:static top-full left-0 w-full md:w-auto
            ${
              scrolled
                ? "bg-white/95"
                : "bg-black/40 md:bg-transparent"
            }
            backdrop-blur-xl
            md:flex md:items-center md:gap-8
            transition-all duration-300 ease-in-out
            ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 md:opacity-100"}
            overflow-hidden md:overflow-visible
          `}
        >

          {/* PROFIL */}
          <div className="md:relative">
            <button
              onClick={() => setProfilOpen(!profilOpen)}
              className={`flex items-center gap-1 px-6 py-3 md:p-0 relative group transition
                ${
                  isProfilActive
                    ? "text-green-600 font-semibold"
                    : scrolled
                    ? "text-gray-700"
                    : "text-white"
                }
              `}
            >
              Profil
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  profilOpen ? "rotate-180" : ""
                }`}
              />
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-600 transition-all group-hover:w-full"></span>
            </button>

            {/* Desktop Dropdown */}
            <div
              className={`
                hidden md:block absolute top-full left-0 mt-4
                bg-white rounded-2xl shadow-xl w-64
                transition-all duration-300 origin-top text-gray-700
                ${
                  profilOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-3 pointer-events-none"
                }
              `}
            >
              {profilMenu.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  onClick={() => setProfilOpen(false)}
                  className={`block px-5 py-3 text-sm transition rounded-xl mx-2 my-1
                    ${
                      pathname === item.link
                        ? "bg-green-50 text-green-700 font-semibold"
                        : "hover:bg-gray-100"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Dropdown */}
            <div className={`md:hidden ${profilOpen ? "block" : "hidden"}`}>
              {profilMenu.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  className="block pl-10 pr-6 py-2 text-gray-700 hover:text-green-700 transition"
                  onClick={() => {
                    setProfilOpen(false)
                    setOpen(false)
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Menu Lain */}
          {menuList.map((menu, i) => (
            <Link
              key={i}
              href={menu.link}
              className={`block px-6 py-3 md:p-0 relative group transition
                ${
                  isActive(menu.link)
                    ? "text-green-600 font-semibold"
                    : scrolled
                    ? "text-gray-700"
                    : "text-white"
                }
              `}
              onClick={() => setOpen(false)}
            >
              {menu.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-600 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* Buttons */}
          <div className="flex flex-col md:flex-row md:items-center gap-3 px-6 md:px-0 py-4 md:py-0">

            <Link
              href="/ppdb"
              className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-green-600 to-emerald-500 shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
              onClick={() => setOpen(false)}
            >
              PPDB
            </Link>

            <Link
              href="/e-learning"
              className="px-6 py-2 rounded-full font-semibold border border-green-600 transition-all duration-300 text-center
              text-green-600 hover:bg-green-600 hover:text-white"
              onClick={() => setOpen(false)}
            >
              E-Learning
            </Link>

          </div>
        </nav>

        {/* Social Media */}
        <div
          className={`hidden md:flex items-center gap-4 transition ${
            scrolled ? "text-gray-700" : "text-white"
          }`}
        >
          <a
            href="https://www.instagram.com/smkgema_bhakti"
            target="_blank"
            className="hover:text-green-600 transition"
          >
            <Instagram size={22} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-green-600 transition"
          >
            <Youtube size={24} />
          </a>
        </div>

      </div>
    </header>
  )
}

export default Navbar