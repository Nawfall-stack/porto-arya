import { getAllProjects } from '@/lib/mdx';
import ProjectCard from '@/components/ui/ProjectCard';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Projects - Arya Team',
  description: 'Explore all projects by Arya Team',
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="min-h-screen py-28">
      <div className="container mx-auto px-4 flex flex-col gap-4">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Web Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">ARYA TEAM</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Collection of our best work from web development to full-stack applications</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-2xl aspect-video w-full">
            {/* Thumbnail */}
            <img
              src="https://images.unsplash.com/photo-1773332611612-ffdaa753afb1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
              alt="image"
              className=" object-fill border-2 opacity-50"
            />

            <h3 className="absolute inset-0 flex flex-col justify-end p-5 translate-y-2 text-2xl ">website</h3>
          </div>
        </div>

        {/* Project Grid */}
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
            <p className="text-muted-foreground text-lg">No projects found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
