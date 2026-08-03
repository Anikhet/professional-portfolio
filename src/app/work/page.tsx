import PageShell from "@/components/PageShell";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export default function WorkPage() {
  return (
    <PageShell maxWidth="max-w-5xl">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
        Work
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        Writing, research, and projects.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </PageShell>
  );
}
