import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { Loader2 } from "lucide-react";
import { getPageNumberFromUrl } from "@/helper";
import { Button } from "../ui/button";

export const PaginationWrapper = ({
  paginationData,
  onPageChange,
  loader = false,
}) => {
  const currentPage = paginationData?.current_page;
  const totalPages = paginationData?.last_page;
  const prevPageUrl = paginationData?.prev_page_url;
  const nextPageUrl = paginationData?.next_page_url;

  const prevPage = getPageNumberFromUrl(prevPageUrl);
  const nextPage = getPageNumberFromUrl(nextPageUrl);

  return (
    <>
      <div className="flex items-center gap-3 justify-center">
        <Button
          isLoading={loader}
          disabled={!prevPageUrl || loader}
          className={`btn-primary btn-md`}
          onClick={() => onPageChange(prevPage)}>
          <LuChevronLeft className="text-base" />
          Previous
        </Button>

        <span className="text-base text-gray-500">
          Pages {currentPage} of {totalPages}
        </span>

        <Button
          isLoading={loader}
          disabled={!nextPageUrl || loader}
          className={`btn-primary btn-md`}
          onClick={() => onPageChange(nextPage)}>
          Next
          <LuChevronRight className="text-base" />
          {loader && <Loader2 className="animate-spin" />}
        </Button>
      </div>
    </>
  );
};
