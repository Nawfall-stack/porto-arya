import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Project, ProjectFrontMatter } from '@/types/project';

const projectsDirectory = path.join(process.cwd(), 'src/content/projects');

export function getProjectSlugs(): string[] {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      return [];
    }
    const files = fs.readdirSync(projectsDirectory);
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => file.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error reading projects slugs:', error);
    return [];
  }

  
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      frontmatter: data as ProjectFrontMatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

export async function getAllProjects(): Promise<Project[]> {
  const slugs = getProjectSlugs();
  const projects = await Promise.all(
    slugs.map((slug) => getProjectBySlug(slug))
  );

  return projects
    .filter((project): project is Project => project !== null)
    .sort((a, b) => {
      return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime();
    });
}

export function getProjectImages(slug: string): string[] {
  const projectDirectory = path.join(
    process.cwd(),
    'public/projects',
    slug
  );

  if (!fs.existsSync(projectDirectory)) {
    return [];
  }

  return fs
    .readdirSync(projectDirectory)
    .filter((file) =>
      /^image-\d+\.(jpg|jpeg|png|webp|avif|gif)$/i.test(file)
    )
    .sort((a, b) => {
      const numberA = Number(a.match(/\d+/)?.[0] ?? 0);
      const numberB = Number(b.match(/\d+/)?.[0] ?? 0);

      return numberA - numberB;
    });
}