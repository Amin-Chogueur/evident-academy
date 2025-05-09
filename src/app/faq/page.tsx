import Accordion from "@/components/common/Accordion";

import { faqData } from "./data";
export default function FAQ() {
  return <Accordion content={faqData} isOpen={true} />;
}
