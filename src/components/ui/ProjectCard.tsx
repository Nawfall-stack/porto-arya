import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  thumbnail: string;
  slug: string;
  stack: string[];
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  category,
  thumbnail,
  slug,
  stack,
  className,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className={cn("group block", className)}>
      <div className="relative overflow-hidden rounded-2xl aspect-video w-full">
        {/* Thumbnail */}
        <Image
          src="/cardImg.webp"
          alt="image"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay gelap — muncul saat hover */}
        <div className="absolute inset-0 bg-neutral-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Konten hover — muncul dari bawah */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          {/* Category */}
          <p className="text-white/60 text-sm font-medium">{category}</p>

          {/* Title + Arrow row */}
          <div className="flex items-end justify-between">
            <h3 className="text-white font-medium text-2xl leading-tight">
              {title}
            </h3>

            {/* Arrow button pojok kanan bawah */}
            <div className="shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 font-medium text-2xl">
        <div className="uppercase">{title}</div>
      </div>
    </Link>
  );
}
