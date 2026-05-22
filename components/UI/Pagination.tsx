import { Button } from "@/components/UI";

type PaginationProps = {
  itemsPerPages: number;
  itemsTotal: number;
  currentPage: number;
  setCurrentPage: (e: number) => void;
};

export function Pagination({
  itemsPerPages,
  itemsTotal,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const numberOfPages = Math.ceil(itemsTotal / itemsPerPages);
  const pageNumbers = Array.from({ length: numberOfPages }, (_, i) => i);

  const handleChange = (pageNo: number) => {
    setCurrentPage(pageNo);
  };

  return (
    <nav className="flex">
      {pageNumbers.map((page) => (
        <Button
          className="mr-2"
          key={`${page}`}
          variant="regular"
          highlight={page === currentPage}
          handleClick={() => handleChange(page)}
        >
          {page + 1}
        </Button>
      ))}
    </nav>
  );
}
