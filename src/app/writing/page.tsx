import PageShell from "@/components/PageShell";
import { getEditorialContent } from "@/data/editorial";

export default function Writing() {
  const { writing, writingProfileUrl } = getEditorialContent();

  return (
    <PageShell>
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
        Writing
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        Articles and write-ups.
      </p>

      <div className="mt-10 flex flex-col gap-8">
        {writing.map((entry) => (
          <article key={entry.url}>
            <h3 className="text-sm font-semibold text-neutral-900">
              <a
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                {entry.title}
                <span aria-hidden="true" className="ml-1 text-xs text-neutral-400">
                  ↗
                </span>
              </a>
            </h3>
            <p className="mt-1 text-sm leading-6 text-neutral-600">{entry.blurb}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <a
        href={writingProfileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block text-sm text-neutral-800 underline underline-offset-4 hover:text-neutral-600"
      >
        All posts on Medium ↗
      </a>
    </PageShell>
  );
}
