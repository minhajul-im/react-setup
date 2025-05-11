import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const demoData = Array.from({ length: 5 }, (_, i) => ({
  id: `item-${i + 1}`,
  question: `Sample Question #${i + 1}`,
  answer: `This is the answer for question #${i + 1}. It's just demo content.`,
}));

export const AccordionSection = () => {
  return (
    <div className="-mt-2">
      <h3 className="text-xl font-medium text-muted-foreground">
        Accordioan Section
      </h3>
      <Accordion type="single" collapsible className="w-full">
        {demoData.map((item, index) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className={index === demoData.length - 1 ? "border-b-0" : ""}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
