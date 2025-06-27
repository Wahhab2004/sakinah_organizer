"use client";

interface PaginationControlProps {
  totalPages: number;
  currentPage: number;
  onNext: () => void;
  onPrevious: () => void;
}

const PaginationControl: React.FC<PaginationControlProps> = ({
  totalPages,
  currentPage,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="flex justify-evenly mt-8 mb-20 items-center">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className="border rounded-lg text-xs text-gray-600 border-gray-600 hover:bg-gray-200 px-4 py-2"
      >
        Previous
      </button>
      <span className="text-gray-600">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="border rounded-lg text-xs text-gray-600 border-gray-600 hover:bg-gray-200 px-4 py-2"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationControl;