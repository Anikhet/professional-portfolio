import Image from "next/image";
import PageShell from "@/components/PageShell";
import { OffDutyIcon } from "@/components/editorial/primitives";
import { getEditorialContent } from "@/data/editorial";

export default function OffDuty() {
  const { offDuty, games } = getEditorialContent();

  return (
    <PageShell maxWidth="max-w-5xl">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
        Off Duty
      </h1>

      <div className="mt-8 flex flex-wrap gap-x-9 gap-y-4">
        {offDuty.map((entry) => (
          <div key={entry.label} className="flex items-center gap-2 text-sm text-neutral-700">
            <OffDutyIcon name={entry.icon} size={20} />
            {entry.label}
          </div>
        ))}
      </div>

      <h2 className="mt-12 text-sm font-semibold text-neutral-900">
        Games I Like
      </h2>

      <div
        className="mt-6 grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))" }}
      >
        {games.map((game) => (
          <figure key={game.name} className="m-0 flex flex-col gap-2">
            <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md border border-neutral-200 bg-neutral-100">
              <Image
                src={game.cover.src}
                alt={game.cover.alt}
                fill
                sizes="(max-width: 600px) 33vw, (max-width: 1024px) 22vw, 140px"
                className="object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-2.5 pb-2 pt-4 text-[10px] tracking-wide text-neutral-100">
                {game.meta}
              </figcaption>
            </div>
            <span className="text-sm font-semibold text-neutral-900">{game.name}</span>
          </figure>
        ))}
      </div>
    </PageShell>
  );
}
