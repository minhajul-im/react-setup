import { Download, FileText, Folder, Image } from "lucide-react";
import { HeaderWithBreadcrumb } from "@/components/common/header-breadcrumb";
import { FaFolderPlus } from "react-icons/fa";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AllMediaSection } from "./all-media";
import { AllFolderSection } from "./all-folders";

export const FileMangerPage = () => {
  return (
    <>
      <section className="p-6 bg-gray-100">
        <Card>
          <CardHeader>
            <HeaderWithBreadcrumb
              title="File Manager"
              breadcrumbs={[{ title: "File Manager" }]}>
              <Button href="/users/create" className="btn-primary btn-lg">
                <FaFolderPlus className="mr-1 h-4 w-4" />
                Add Folder
              </Button>
            </HeaderWithBreadcrumb>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <AllMediaSection mediaOverviewData={mediaOverviewData} />
            <AllFolderSection mediaOverviewData={mediaOverviewData} />
          </CardContent>
        </Card>
      </section>
    </>
  );
};

const mediaOverviewData = [
  {
    title: "Images",
    files: 245,
    usage: "17%",
    size: "26.40 GB",
    icon: Image,
    className: "bg-green-100 text-green-600",
  },
  {
    title: "Folders",
    files: 245,
    usage: "22%",
    size: "26.40 GB",
    icon: Folder,
    className: "bg-pink-100 text-pink-600",
  },

  {
    title: "Docs",
    files: 245,
    usage: "18%",
    size: "26.40 GB",
    icon: FileText,
    className: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Downloads",
    files: 245,
    usage: "16%",
    size: "26.40 GB",
    icon: Download,
    className: "bg-purple-100 text-purple-600",
  },
];
