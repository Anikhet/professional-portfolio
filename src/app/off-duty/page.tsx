import { getEditorialContent } from "@/data/editorial";
import { OffDutyPage } from "@/components/editorial/off-duty-page";

export default function OffDuty() {
  const content = getEditorialContent();
  return <OffDutyPage content={content} />;
}
