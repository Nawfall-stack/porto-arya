'use client';
import { useState } from 'react';
import { Menu, Minus, House, Folder, Mail, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  {
    label: 'Homepage',
    href: '/',
    icon: House,
  },
  {
    label: 'Projects',
    href: '/projects',
    icon: Folder,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: Mail,
  },
  {
    label: 'Creators',
    href: '/creators',
    icon: Users,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const currentPage = menuItems.find((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))?.label || 'Homepage';

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
      <div className="bg-white shadow-sm rounded-xl border border-neutral-300 overflow-visible">
        {/* Navbar Header */}
        <div className="flex items-center justify-between px-3 py-2">
          <div className="flex gap-4 items-center">
            <Image src="/AT-b.webp" alt="AT-navbar-logo" width={200} height={200} className="w-8 h-fit" />

            <span className="text-sm font-medium text-neutral-700">{currentPage}</span>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer" aria-label="Toggle menu">
            {menuOpen ? <Minus /> : <Menu />}
          </button>
        </div>

        {/* Dropdown Menu */}
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 border-t border-neutral-100">
            <ul className="space-y-1">
              {menuItems.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors group -ml-2" onClick={() => setMenuOpen(false)}>
                      <Icon className="size-4" />
                      <span className="text-lg font-medium text-black">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
