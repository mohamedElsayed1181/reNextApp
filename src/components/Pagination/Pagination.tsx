import {
  Pagination as ShadPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const handlePageChange = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: number,
  ) => {
    e.preventDefault();
    onPageChange(page);
  };

  return (
    <ShadPagination>
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              if (currentPage > 1) {
                handlePageChange(e, currentPage - 1);
              }
            }}
          />
        </PaginationItem>

        {/* Pages */}

        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                isActive={currentPage === page}
                onClick={(e) => handlePageChange(e, page)}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {/* Next */}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              if (currentPage < totalPages) {
                handlePageChange(e, currentPage + 1);
              }
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadPagination>
  );
}
