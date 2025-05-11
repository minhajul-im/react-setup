import { cn } from "@/lib/utils";
import { useCopyToClipboard } from "@/hooks/use-copy";
import { Button, buttonVariants } from "../ui/button";
import { Check, Copy } from "lucide-react";

export const CopyButton = ({ id, withText = false }) => {
  const { copiedIds, copyToClipboard } = useCopyToClipboard();
  return (
    <Button
      tooltipText="Copy"
      onClick={() => copyToClipboard(id)}
      className={cn(
        withText && buttonVariants({ variant: "outline", size: "sm" }),
        copiedIds[id]
          ? withText
            ? "bg-green-50 text-green-600 border-green-200 text-success"
            : "text-success"
          : ""
      )}>
      {copiedIds[id] ? (
        <Check className="h-4 w-4 mr-1" />
      ) : (
        <Copy className="h-4 w-4 mr-1" />
      )}
      {withText ? (copiedIds[id] ? "Copied" : "Copy") : null}
    </Button>
  );
};
