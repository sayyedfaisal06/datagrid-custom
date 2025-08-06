import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationLink,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import type { AgGridReact } from "ag-grid-react";
import type { RefObject } from "react";

const TablePagination = ({
  gridRef,
  currentPage,
  totalPages,
}: {
  gridRef: RefObject<AgGridReact<unknown> | null>;
  currentPage: number;
  totalPages: number;
}) => {
  if (!gridRef) return null;
  return (
    <Pagination className="mt-2 flex justify-end">
      <PaginationContent className="mr-2">
        <PaginationItem>
          <PaginationPrevious
            className={cn("cursor-pointer mr-2", {
              "cursor-not-allowed": currentPage === 0,
            })}
            onClick={() => gridRef.current!.api.paginationGoToPreviousPage()}
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              onClick={() => gridRef.current!.api.paginationGoToPage(index)}
              className={`px-3 py-1 rounded cursor-pointer ${
                currentPage === index ? "bg-black text-white" : "hover:bg-muted"
              }`}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            className={cn("cursor-pointer ml-2", {
              "cursor-not-allowed": currentPage === totalPages - 1,
            })}
            onClick={() => gridRef.current!.api.paginationGoToNextPage()}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;
