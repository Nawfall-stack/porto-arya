import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import ProjectInfoModal from "@/components/ui/ProjectInfoModal";



export async function generateStaticParams() {
  const slugs = getProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.frontmatter.title} - Arya Team`,
    description: project.frontmatter.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <div className="min-h-screen py-28 flex flex-col gap-18">
      {/* Header / Title Section (Sesuai desain: Kategori di atas, Judul Besar, tombol Project Info) */}
      {/* Page Header */}
      <div className="text-center flex flex-col items-center gap-4">
        <p className="text-lg tracking-tight text-muted-foreground">{frontmatter.category}</p>
        <h1 className="text-5xl md:text-7xl p-0 font-semibold tracking-tighter uppercase">
          {frontmatter.title}
        </h1>
        <p className="max-w-5xl hidden md:block text-2xl tracking-tighter">{frontmatter.description}</p>

        <div className="tracking-tight py-2 px-4 bg-accent text-foreground rounded-lg">
          <ProjectInfoModal project={frontmatter} />
        </div>
      </div>

      {/* Hero / Main Thumbnail Image */}
      <div className="container mx-auto px-4 flex flex-col gap-4">
        <Image
          src={frontmatter.thumbnail}
          alt={frontmatter.title}
          width={2000}
          height={2000}
          className="object-cover aspect-video rounded-xl"
          priority
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            width={1000}
            height={1000}
            className="object-cover aspect-square rounded-xl"
            priority
          />
          <Image
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            width={1000}
            height={1000}
            className="object-cover aspect-square rounded-xl"
            priority
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Image
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            width={500}
            height={500}
            className="object-cover aspect-square rounded-xl"
            priority
          />
          <Image
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            width={500}
            height={500}
            className="object-cover aspect-square rounded-xl"
            priority
          />
          <Image
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            width={500}
            height={500}
            className="object-cover aspect-square rounded-xl"
            priority
          />
          <Image
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            width={500}
            height={500}
            className="object-cover aspect-square rounded-xl"
            priority
          />
          <Image
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            width={500}
            height={500}
            className="object-cover aspect-square rounded-xl"
            priority
          />
          <Image
            src={frontmatter.thumbnail}
            alt={frontmatter.title}
            width={500}
            height={500}
            className="object-cover aspect-square rounded-xl"
            priority
          />
        </div>
        {/* Content & Layout Section */}
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* MDX Content / Testimonial / Description */}
            <div className="prose prose-gray dark:prose-invert max-w-none md:text-4xl text-center tracking-tight flex flex-col gap-8 py-4">
              <MDXRemote source={content} />
            </div>
          </div>
        </div>
        <Image
          src={frontmatter.thumbnail}
          alt={frontmatter.title}
          width={2000}
          height={2000}
          className="object-cover aspect-video rounded-xl"
          priority
        />{" "}
        <Image
          src={frontmatter.thumbnail}
          alt={frontmatter.title}
          width={2000}
          height={2000}
          className="object-cover aspect-video rounded-xl"
          priority
        />
      </div>
    </div>
  );
}
