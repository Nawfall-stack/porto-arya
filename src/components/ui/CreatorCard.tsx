import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';
import {SiGithub, SiYoutube, SiInstagram} from '@icons-pack/react-simple-icons';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

interface CreatorCardProps {
  name: string;
  role: string;
  image: string;
  socials?: SocialLink[];
  className?: string;
}

// ── Social Icons ──────────────────────────────────────────────────
const GithubIcon = () => (
  <SiGithub className='lg:w-12 lg:h-12 md:w-6 w-8 h-8'/>
);

const InstagramIcon = () => (
  <SiInstagram className='lg:w-12 lg:h-12 md:w-6  w-8 h-8'/>
);

// const LinkedinIcon = () => (
//   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//   </svg>
// );

const GlobeIcon = () => (
  <Globe className='lg:w-12 lg:h-12 md:w-6 w-8 h-8'/>
);

// ── Default socials ───────────────────────────────────────────────
const defaultSocials: SocialLink[] = [
  { icon: <GithubIcon />,    href: '#', label: 'GitHub' },
  { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
  // { icon: <LinkedinIcon />,  href: '#', label: 'LinkedIn' },
  { icon: <GlobeIcon />,     href: '#', label: 'Website' },
];

// ── Component ─────────────────────────────────────────────────────
export default function CreatorCard({
  name,
  role,
  image,
  socials = defaultSocials,
  className,
}: CreatorCardProps) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-[28px] bg-neutral-900',
        'w-full aspect-3/4',
        'shadow-2xl shadow-black/40',
        className
      )}
    >
      {/* ── Foto background ── */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        sizes="240px"
      />

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/5 to-black/20" />

      {/* ── Top-left: Logo AT. ── */}
      <div className="absolute top-6 left-6 z-10">
        <img src="/AT-w.webp" alt="" className='w-16 md:w-12 lg:w-16' />
      </div>

      {/* ── Top-right: Social icons ── */}
      <div className="absolute top-6 right-4 md:right-0 lg:right-6 z-10 flex flex-col gap-6 md:gap-3 lg:gap-6">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center
              w-16  rounded-lg
              hover:
              text-white/80 hover:text-white
              transition-all duration-150
            "
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* ── Bottom: Role & Name ── */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
        <p className="text-white/55 text-xl md:text-sm lg:text-xl font-medium mb-0.5 tracking-wide uppercase">
          {role}
        </p>
        <h3 className="text-white font-semibold text-3xl md:text-[24px] lg:text-3xl leading-tight tracking-tight">
          {name}
        </h3>
      </div>
    </div>
  );
}