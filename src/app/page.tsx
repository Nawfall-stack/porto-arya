import { getAllProjects } from "@/lib/mdx";
import ProjectCard from "@/components/ui/ProjectCard";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Projects - Arya Team",
  description: "Explore all projects by Arya Team",
};

const techStacks = [
  "laravel",
  "supabase",
  "vercel",
  "nextjs",
  "livewire",
  "figma",
  "vite",
  "reactjs",
  "puck",
  "tailwindcss",
  "filament",
  "shadcn",
];

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen py-28">
      <div className="container mx-auto px-4 flex flex-col gap-12">
        {/* Page Header */}
        <div className="text-center flex flex-col gap-8">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">
            Web Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            ARYA TEAM
          </h1>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <div className="flex gap-2 justify-center items-center">
              <img
                src="/home-1.jpg"
                alt="avatar-1"
                className=" aspect-square object-cover rounded-full h-6"
              />
              <p className=" capitalize text-lg font-regular tracking-tight">
                iqbal ramadani
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <img
                src="/home-1.jpg"
                alt="avatar-1"
                className=" aspect-square object-cover rounded-full h-6"
              />
              <p className=" capitalize text-lg font-regular tracking-tight">
                farhan syifaul
              </p>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <img
                src="/home-1.jpg"
                alt="avatar-1"
                className=" aspect-square object-cover rounded-full h-6"
              />
              <p className=" capitalize text-lg font-regular tracking-tight">
                naufal irfansyah
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="relative aspect-video md:aspect-3/4 rounded-xl overflow-hidden">
            <img
              src="/home-1.jpg"
              alt="image"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="capitalize absolute inset-0 flex items-end p-5 text-2xl font-medium tracking-tight text-white">
              beautifully design component
            </h3>
          </div>
          <div className="relative aspect-video md:aspect-3/4 rounded-xl overflow-hidden">
            <img
              src="/home-2.jpg"
              alt="image"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="capitalize absolute inset-0 flex items-end p-5 text-2xl font-medium tracking-tight text-white">
              friendly user experience
            </h3>
          </div>
          <div className="relative aspect-video md:aspect-3/4 rounded-xl overflow-hidden">
            <img
              src="/home-3.jpg"
              alt="image"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <h3 className="capitalize absolute inset-0 flex items-end p-5 text-2xl font-medium tracking-tight text-white">
              SEO optimization
            </h3>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="capitalize text-2xl font-medium tracking-tight ">
            tech stack
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {techStacks.map((techStack, index) => (
              <Image
                src={`/techstack/${techStack}.svg`}
                key={index}
                width={500}
                height={500}
                alt="Picture of the author"
                className="border-2 border-accent/20 border-dashed"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center ">
            <h3 className="capitalize text-2xl font-medium tracking-tight ">
              Projects
            </h3>
            <Link href="/project" className=" capitalize">
              see all
            </Link>
          </div>
          {/* Project Grid */}
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.slice(0, 2).map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.frontmatter.title}
                  description={project.frontmatter.description}
                  category={project.frontmatter.category}
                  thumbnail={project.frontmatter.thumbnail}
                  slug={project.slug}
                  stack={project.frontmatter.stack}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects found.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
