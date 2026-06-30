import { getEditorialContent } from "@/data/editorial";
import { FramesPage } from "@/components/editorial/frames-page";

export default function Frames() {
  const content = getEditorialContent();
  return <FramesPage content={content} />;
}
