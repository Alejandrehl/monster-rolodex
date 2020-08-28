import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ searchField, onChangeSearch }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="Search monster"
      value={searchField}
      onChange={onChangeSearch}
    />
  );
};
