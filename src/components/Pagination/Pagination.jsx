// components/Pagination.jsx
import React from "react";
import ReactPaginate from "react-paginate";
import "./Pagination.scss"; // (optional) style file

function Pagination({ pageCount, onPageChange }) {
  return (
    <div className="paginate-container">
      <ReactPaginate
        previousLabel={"Prev"}
        nextLabel={"Next"}
        onPageChange={onPageChange}
        pageCount={pageCount}
        containerClassName="pagination"
        previousLinkClassName="pagination__link"
        nextLinkClassName="pagination__link"
        disabledClassName="pagination__link--disabled"
        activeClassName="pagination__link--active"
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default Pagination;
