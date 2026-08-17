import { getAllProjects } from "@/lib/mdx";
import ProjectCard from "@/components/ui/ProjectCard";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <>
      <div className="container mx-auto px-4 flex flex-col gap-12">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            Web Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            PROJECTS
          </h1>
        </div>
      </div>

      <div className="grid gap-6 px-4">
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.frontmatter.title}
                category={project.frontmatter.category}
                slug={project.slug}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found.</p>
          </div>
        )}
      </div>
    </>
  );
}
