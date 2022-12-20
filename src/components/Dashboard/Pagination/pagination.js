import { useState } from "react";
import Pagination from "@mui/material/Pagination";
import "./pagination.css";
import { color } from "@mui/system";
function PaginationComponent({ pageNumber, handleChange }) {
  return (
    <div className="pagination-div">
      <Pagination
        count={10}
        page={pageNumber}
        onChange={handleChange}
        sx={{
          color: "var(--white)",
          "& .Mui-selected ": {
            backgroundColor: "var(--darkpink) !important",
            color: "#fff !important",
            color: "var(--black)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
}

export default PaginationComponent