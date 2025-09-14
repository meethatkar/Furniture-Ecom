import ReactPaginate from "react-paginate";
import React from 'react'
import { ChevronLeft, ChevronRight } from "lucide-react";

const PaginationBar = ({ pageCount, setCurrentPage }) => {
  // console.log("BAR: ", pageCount);

  return (
    <ReactPaginate
      previousLabel=<ChevronLeft />
      nextLabel=<ChevronRight />
      breakLabel={"..."}

      pageCount={pageCount}
      onPageChange={({ selected }) => setCurrentPage(selected)}

      renderLink={(item) => (
        <button
          type="button"
          className="px-3 py-1 border rounded"
          {...item}
        >
          {item.children}
        </button>
      )}

      containerClassName="flex justify-center gap-2 mt-6 hover:cursor-pointer"
      pageClassName="px-3 py-1 border rounded"
      activeClassName="bg-blue-500 text-white"
      previousClassName="px-3 py-1 border rounded"
      nextClassName="px-3 py-1 border rounded"
      disabledClassName="opacity-50 cursor-not-allowed"
    />
  )
}

export default PaginationBar