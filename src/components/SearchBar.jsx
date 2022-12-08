import React, { useState } from "react";
import fetchData from "../api/api";

export default function SearchBar(props) {
  const [searchInput, setSearchInput] = useState("");

  const inputHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const result = await fetchData(searchInput);
    result ? props.setData(result) : null;
  };

  return (
    <>
      <form onSubmit={submitHandler} className="flex justify-center p-5">
        <div className="flex rounded-md overflow-hidden w-60 h-10">
          <input
            onChange={inputHandler}
            type="text"
            placeholder="Type here"
            className="w-full rounded-md rounded-r-none"
          />
          <button
            className="bg-indigo-600 text-white text-sm font-semibold rounded-r-md p-3"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}
