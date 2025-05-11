import { CardWrapper } from "@/components/common/card-wrapper";
import { AccordionSection } from "./accordion";
import { TabSections } from "./tabs";

export const WidgetsPage = () => {
  return (
    <section className="p-6 bg-gray-100">
      <CardWrapper title="Widgets">
        <TabSections />
      </CardWrapper>
    </section>
  );
};
