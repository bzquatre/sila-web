import React from 'react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const maxButtons = 5;
  const pages = [];

  // Calculate start and end pages for pagination
  let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  let endPage = Math.min(totalPages, startPage + maxButtons - 1);

  // Adjust startPage if we are near the last pages
  if (endPage - startPage + 1 < maxButtons && totalPages >= maxButtons) {
    startPage = Math.max(1, endPage - maxButtons + 1);
  }

  // Generate the page numbers to display
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <ol className="flex justify-center gap-1 text-xs font-medium">
      {/* Previous Page Button */}
      <li>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Prev Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>

      {/* Page Numbers */}
      {pages.map((page) => (
        <li key={page}>
          <button
            onClick={() => onPageChange(page)}
            className={`block size-8 rounded border ${
              page === currentPage
                ? 'border-blue-600 bg-blue-600 text-white'
                : 'border-gray-100 bg-white text-gray-900'
            } text-center leading-8`}
          >
            {page}
          </button>
        </li>
      ))}

      {/* Next Page Button */}
      <li>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
        >
          <span className="sr-only">Next Page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </li>
    </ol>
  );
}
