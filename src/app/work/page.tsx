import { getEditorialContent } from "@/data/editorial";
import { WorkPage } from "@/components/editorial/work-page";

export default function Work() {
  const content = getEditorialContent();
  return <WorkPage content={content} />;
}
