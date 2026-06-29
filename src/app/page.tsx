import { getEditorialContent } from "@/data/editorial";
import { EditorialFrontPage } from "@/components/editorial/editorial-front-page";

export default function Home() {
  const content = getEditorialContent();
  return <EditorialFrontPage content={content} />;
}
