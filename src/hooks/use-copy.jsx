import { useState } from "react";
import toast from "react-hot-toast";

export const useCopyToClipboard = () => {
  const [copiedIds, setCopiedIds] = useState({});

  const copyToClipboard = (id) => {
    if (!id) return;

    navigator.clipboard
      .writeText(id.toString())
      .then(() => {
        setCopiedIds((prev) => ({ ...prev, [id]: true }));
        toast.success("Copied Success!");

        setTimeout(() => {
          setCopiedIds((prev) => ({ ...prev, [id]: false }));
        }, 2000);
      })
      .catch(() => {
        toast.error("Copied Failed!");
      });
  };

  return { copiedIds, copyToClipboard };
};
