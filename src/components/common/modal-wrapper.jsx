import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { forwardRef, useImperativeHandle, useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const ModalWrapper = forwardRef(
  ({ title, onHide, width = "max-w-md", children }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useImperativeHandle(ref, () => ({
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }));

    useEffect(() => {
      setMounted(true);
      return () => setMounted(false);
    }, []);

    const handleClose = () => {
      setIsOpen(false);
      if (onHide) onHide();
    };

    const handlePropagation = (e) => {
      e.stopPropagation();
    };

    if (!mounted) return null;

    return createPortal(
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div
              className={`bg-white pl-6 pb-6 pt-3 pr-3 shadow-xl rounded-2xl w-full h-auto ${width} relative`}
              onClick={handlePropagation}
              initial={{ opacity: 0, scale: 0.9, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{ duration: 0.25 }}>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <Button
                  onClick={handleClose}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" })
                  )}>
                  <X />
                </Button>
              </div>
              <div className="pr-3 h-auto" style={{ maxHeight: "80vh" }}>
                {children}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.getElementById("modal-root")
    );
  }
);

ModalWrapper.displayName = "ModalWrapper";
