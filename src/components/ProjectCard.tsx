import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col">
      <div className="aspect-video w-full overflow-hidden rounded-lg bg-neutral-100">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-neutral-400">
            No image
          </div>
        )}
      </div>
      <h3 className="mt-3 text-sm font-semibold text-neutral-900">
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            {project.title}
            <span aria-hidden="true" className="ml-1 text-xs text-neutral-400">
              ↗
            </span>
          </a>
        ) : (
          project.title
        )}
      </h3>
      <p className="mt-1 truncate text-sm italic text-neutral-600">
        {project.description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
