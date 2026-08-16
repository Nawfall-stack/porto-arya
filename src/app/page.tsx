import { getAllProjects } from '@/lib/mdx';
import ProjectCard from '@/components/ui/ProjectCard';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Projects - Arya Team',
  description: 'Explore all projects by Arya Team',
};

const teamMembers = [
  {
    name: 'Iqbal Ramadani',
    avatar: '/ava-1.jpg',
  },
  {
    name: 'Farhan Syifaul',
    avatar: '/ava-2.jpg',
  },
  {
    name: 'Naufal Irfansyah',
    avatar: '/ava-3.jpg',
  },
];

const features = [
  {
    title: 'Beautifully Designed Component',
    image: '/home-1.jpg',
  },
  {
    title: 'Friendly User Experience',
    image: '/home-2.jpg',
  },
  {
    title: 'SEO Optimization',
    image: '/home-3.jpg',
  },
];

const techStacks = ['laravel', 'supabase', 'vercel', 'nextjs', 'livewire', 'figma', 'vite', 'reactjs', 'puck', 'tailwindcss', 'filament', 'shadcn'];

export default async function ProjectsPage() {
  const projects = await getAllProjects();
  const featuredProjects = projects.slice(0, 2);

  return (
    <main className="min-h-screen py-28">
      <div className="container mx-auto flex flex-col gap-12 px-4">
        {/* Header */}
        <header className="flex flex-col gap-8 text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground">Web Portfolio</p>

          <h1 className="text-5xl font-bold tracking-tighter md:text-7xl">ARYA TEAM</h1>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex items-center gap-2">
                <Image src={member.avatar} alt={member.name} width={24} height={24} className="aspect-square rounded-full object-cover border border-black/50" loading="eager" />

                <p className="text-lg font-normal tracking-tight">{member.name}</p>
              </div>
            ))}
          </div>
        </header>

        {/* Features */}
        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="relative aspect-video overflow-hidden rounded-xl md:aspect-3/4">
              <Image src={feature.image} alt={feature.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" preload={true} />

              <div className="absolute inset-0 bg-black/40" />

              <h3 className="absolute inset-0 flex items-end p-5 text-2xl font-medium tracking-tight text-white">{feature.title}</h3>
            </div>
          ))}
        </section>

        {/* Tech Stack */}
        <section className="flex flex-col gap-8">
          <h2 className="text-2xl font-medium tracking-tight">Tech Stack</h2>

          <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-3 lg:grid-cols-4">
            {techStacks.map((techStack) => (
              <Image key={techStack} src={`/techstack/${techStack}.svg`} alt={`${techStack} logo`} width={500} height={500} className="border-2 border-dashed border-accent/20" />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-medium tracking-tight">Projects</h2>

            <Link href="/projects" className="group inline-flex items-center gap-1 capitalize">
              See all
              <ArrowRight className="w-4 h-4 hidden group-hover:block" />
            </Link>
          </div>

          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} title={project.frontmatter.title} category={project.frontmatter.category} slug={project.slug} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-lg text-muted-foreground">No projects found.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
