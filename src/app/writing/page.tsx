import { getEditorialContent } from "@/data/editorial";
import { WritingPage } from "@/components/editorial/writing-page";

export default function Writing() {
  const content = getEditorialContent();
  return <WritingPage content={content} />;
}
