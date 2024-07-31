import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Pagination({ productPerPage, totalProducts, paginate, currentPage }) {
  const pageNumbers = [];
  const totalPageNumbers = Math.ceil(totalProducts / productPerPage);

  for (let i = 1; i <= totalPageNumbers; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const maxVisiblePages = 3;
    const pages = [];

    if (totalPageNumbers <= maxVisiblePages) {
      for (let i = 1; i <= totalPageNumbers; i++) {
        pages.push(
          <div
            key={i}
            onClick={() => paginate(i)}
            className={`pagination px-[13px] py-[3px] cursor-pointer ${
              currentPage === i ? "bg-[#AAD7D2] text-[#fff]" : "text-[#AAD7D2] bg-[#fff]"
            }`}
          >
            <span className="text-[14px]">{i}</span>
          </div>
        );
      }
    } else {
      const leftSide = currentPage - 1 > 1;
      const rightSide = currentPage + 1 < totalPageNumbers;

      pages.push(
        <div
          key={1}
          onClick={() => paginate(1)}
          className={`pagination px-[13px] py-[3px] cursor-pointer ${
            currentPage === 1 ? "bg-[#AAD7D2] text-[#fff]" : "text-[#AAD7D2] bg-[#fff]"
          }`}
        >
          <span className="text-[14px]">1</span>
        </div>
      );

      if (leftSide && currentPage > 2) {
        pages.push(
          <div key="dots-left" className="pagination px-[13px] py-[3px]">
            <span className="text-[14px] text-[#AAD7D2]">...</span>
          </div>
        );
      }

      const startPage = leftSide ? currentPage - 1 : 2;
      const endPage = rightSide ? currentPage + 1 : totalPageNumbers - 1;

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <div
            key={i}
            onClick={() => paginate(i)}
            className={`pagination px-[13px] py-[3px] cursor-pointer ${
              currentPage === i ? "bg-[#AAD7D2] text-[#fff]" : "text-[#AAD7D2] bg-[#fff]"
            }`}
          >
            <span className="text-[14px]">{i}</span>
          </div>
        );
      }

      if (rightSide && currentPage < totalPageNumbers - 1) {
        pages.push(
          <div key="dots-right" className="pagination px-[13px] py-[3px]">
            <span className="text-[14px] text-[#AAD7D2]">...</span>
          </div>
        );
      }

      pages.push(
        <div
          key={totalPageNumbers}
          onClick={() => paginate(totalPageNumbers)}
          className={`pagination px-[13px] py-[3px] cursor-pointer ${
            currentPage === totalPageNumbers ? "bg-[#AAD7D2] text-[#fff]" : "text-[#AAD7D2] bg-[#fff]"
          }`}
        >
          <span className="text-[14px]">{totalPageNumbers}</span>
        </div>
      );
    }

    return pages;
  };

  return (
    <>
      {currentPage > 1 && (
        <div
          className="flex gap-[4px] items-center cursor-pointer"
          onClick={() => paginate(currentPage - 1)}
        >
          <FontAwesomeIcon icon={faAngleLeft} className="text-[#AAD7D2] text-[12px]" />
          <span className="text-[12px] text-[#AAD7D2]">Previous</span>
        </div>
      )}
      {renderPageNumbers()}
      {currentPage < totalPageNumbers && (
        <div
          className="flex gap-[4px] items-center cursor-pointer"
          onClick={() => paginate(currentPage + 1)}
        >
          <span className="text-[12px] text-[#AAD7D2]">Next</span>
          <FontAwesomeIcon icon={faAngleRight} className="text-[12px] text-[#AAD7D2]" />
        </div>
      )}
    </>
  );
}

export default Pagination;
