import PageShell from "@/components/PageShell";
import { FramesGallery } from "@/components/editorial/frames-gallery";
import { getEditorialContent } from "@/data/editorial";

export default function Frames() {
  const { pictures } = getEditorialContent();

  return (
    <PageShell maxWidth="max-w-5xl">
      <h1 className="text-3xl font-semibold tracking-tight text-neutral-900">
        Frames
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        Photos from behind the telescope and elsewhere.
      </p>

      <div className="mt-10">
        <FramesGallery pictures={pictures} />
      </div>
    </PageShell>
  );
}
