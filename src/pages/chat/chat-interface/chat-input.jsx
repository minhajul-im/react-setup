import { Field } from "@/components/common/field";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mic, Paperclip, Send } from "lucide-react";

export const ChatInput = ({ inputValue, onChangeInput, onSendMessage }) => {
  return (
    <div className="p-4 border-t">
      <div className="flex items-center gap-2">
        <Button
          className={cn(
            buttonVariants({ variant: "outline", size: "icon" }),
            "rounded-full"
          )}>
          <Paperclip />
        </Button>
        <div className="flex-1 relative">
          <Field>
            <input
              type="text"
              className="form-control input-xl rounded-full"
              placeholder="Type a message..."
              value={inputValue}
              onChange={onChangeInput}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSendMessage();
                }
              }}
            />
          </Field>
          <Button
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "absolute right-[3px] top-1/2 -translate-y-1/2 rounded-full border-none py-[2px]"
            )}>
            <Mic />
          </Button>
        </div>
        <Button
          onClick={onSendMessage}
          className={cn(
            buttonVariants({ variant: "default", size: "icon" }),
            "rounded-full"
          )}
          disabled={inputValue.trim() === ""}>
          <Send />
        </Button>
      </div>
    </div>
  );
};
