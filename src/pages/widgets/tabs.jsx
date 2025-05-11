import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccordionSection } from "./accordion";
import { SuccessMessage } from "@/components/common/success-message";
import { ErrorMessage } from "@/components/common/error-message";
import { cn } from "@/lib/utils";

export const TabSections = () => {
  return (
    <Tabs defaultValue="accordion" className="flex gap-6">
      <TabsList>
        <div className="flex flex-col w-[200px]">
          <TabsTrigger
            value="accordion"
            className={cn(
              "w-full flex justify-start pl-4 py-2 data-[state=active]:bg-muted data-[state=active]:text-primary"
            )}>
            Accordion
          </TabsTrigger>
          <TabsTrigger
            value="successful"
            className={cn(
              "w-full flex justify-start pl-4 py-2 data-[state=active]:bg-muted data-[state=active]:text-primary"
            )}>
            Successful
          </TabsTrigger>
          <TabsTrigger
            value="error"
            className={cn(
              "w-full flex justify-start pl-4 py-2 data-[state=active]:bg-muted data-[state=active]:text-primary"
            )}>
            Error
          </TabsTrigger>
        </div>
      </TabsList>

      <div className="flex-1 border rounded-lg p-6">
        <TabsContent value="accordion">
          <AccordionSection />
        </TabsContent>
        <TabsContent value="successful">
          <SuccessMessage />
        </TabsContent>
        <TabsContent value="error">
          <ErrorMessage />
        </TabsContent>
      </div>
    </Tabs>
  );
};
