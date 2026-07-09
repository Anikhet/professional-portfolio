import GridBackground from "@/components/GridBackground";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export default function WorkPage() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <GridBackground />

      <div className="relative z-10">
        <Navbar />

        <main className="mx-auto max-w-5xl px-8 py-12">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
            Work
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            Writing, research, and projects.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
