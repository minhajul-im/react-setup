import React from "react";
import { CardWrapper } from "@/components/common/card-wrapper";

export const AllMediaSection = ({ mediaOverviewData }) => {
  return (
    <CardWrapper title="All Media">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {mediaOverviewData?.map((media) => (
          <div
            key={media?.title}
            className="md:col-span-6 lg:col-span-3 flex justify-between items-center p-4 rounded-lg bg-gray-50 border">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-14 h-14 rounded-full flex justify-center items-center ${media?.className}`}>
                <media.icon />
              </div>
              <div className="flex gap-1 flex-col">
                <p className="font-medium text-base">{media.title}</p>
                <span className="text-muted-foreground text-sm">
                  {media?.usage} Used
                </span>
              </div>
            </div>
            <div className="flex gap-2 flex-col font-medium text-muted-foreground text-xs">
              <span>{media?.files} files</span>
              <span>{media.size}</span>
            </div>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};
