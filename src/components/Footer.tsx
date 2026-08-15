'use client';

import Link from 'next/link';
import { SiGithub, SiYoutube, SiInstagram } from '@icons-pack/react-simple-icons';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const menuItems = [
  { label: 'Homepage', href: '/' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
  { label: 'Creators', href: 'creators' },
];

const socialLinks = [
  { icon: SiGithub, href: '', label: 'Github' },
  { icon: SiYoutube, href: '', label: 'Youtube' },
  { icon: SiInstagram, href: '', label: 'Instagram' },
];

export default function Footer() {
  return (
    <div className="p-4">
      <footer className="bg-neutral-900 rounded-xl px-8 lg:px-12 py-8 lg:py-10">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          {/* Left: Menu links */}
          <div>
            <p className="text-white text-xl font-regular mb-3">Menu</p>
            <ul className="space-y-1 -ml-2">
              {menuItems.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center py-1 group">
                    {/* Chevron geser dari kiri, dorong teks ke kanan */}
                    <span
                      className="text-white font-semibold text-2xl 
                                    -translate-x-4 opacity-0 
                                    group-hover:translate-x-0 group-hover:opacity-100 
                                    transition-all duration-200 ease-out"
                    >
                      <ChevronRight />
                    </span>

                    {/* Teks ikut bergeser ke kanan saat chevron muncul */}
                    <span
                      className="text-white font-semibold text-2xl 
                                    -translate-x-4
                                    group-hover:translate-x-0 group-hover:underline group-hover:underline-offset-4
                                    transition-all duration-200 ease-out"
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Social icons + Logo */}
          <div className="flex flex-col items-start sm:items-end justify-between gap-6">
            <div className="flex gap-8">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-white/60 hover:text-white transition-colors">
                  <social.icon className="w-10 h-10" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 flex flex-col-reverse sm:flex-row justify-between items-start sm:items-end gap-4">
          <p className="text-white text-lg">
            © 2026 Arya Team.
            <br />
            All Rights Reserved.
          </p>
          <div className="text-right">
            <Image src="/AT-w.webp" alt="Arya Team Logo - White Version" width={200} height={200} className="w-20 md:w-48 h-auto" />
          </div>
        </div>
      </footer>
    </div>
  );
}
