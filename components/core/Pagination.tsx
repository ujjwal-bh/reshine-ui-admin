import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";

interface IProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

export default function PaginationComponent({ currentPage, totalPages, onPageChange }: IProps) {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageChange = (page: number) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const renderPaginationItems = () => {
    const items = [];

    for (let i = 1; i <= totalPages; i++) {
      items.push(
        <PaginationItem key={i} className={i === currentPage ? "cursor-pointer font-bold bg-gray-200 rounded-md" : "cursor-pointer"}>
          <PaginationLink onClick={() => handlePageChange(i)}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <Pagination >
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious} className="cursor-pointer"/>
        </PaginationItem>
        {renderPaginationItems()}
        <PaginationItem>
          <PaginationNext onClick={handleNext} className="cursor-pointer"/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
