"use client";
import { useState } from "react";
import { Menu, Minus } from "lucide-react";
import { usePathname } from 'next/navigation'
import Link from "next/link";

const menuItems = [
  { label: "Homepage", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
  { label: "Creators", href: "/creators" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()

  const currentPage =
    menuItems.find((item) => item.href === pathname)?.label || 'Homepage'

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
      <div className="bg-white shadow-sm rounded-xl border border-neutral-300 overflow-visible">
        {/* Navbar Header */}
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex items-center gap-2">
            <img src="/AT-b.webp" alt="" className="w-8" />
            <span className="text-sm font-medium text-neutral-700">
              {currentPage}
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <Minus /> : <Menu />}
          </button>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-4 pt-1 border-t border-neutral-100">
            <p className="text-xs text-black font-medium mb-2 px-1">menu</p>
            <ul className="space-y-1">
              {menuItems.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors group -ml-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    <img className="w-12 h-8 rounded-md bg-neutral-200 block" />
                    <span className="text-lg font-medium text-black">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
