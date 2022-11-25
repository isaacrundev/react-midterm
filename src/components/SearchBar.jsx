import React, { useState } from "react";
import fetchIngredientData from "../api/api";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const inputHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (fetchIngredientData(searchInput) === undefined) {
      console.log("No results");
    } else {
      console.log(fetchIngredientData(searchInput));
    }
  };

  return (
    <React.Fragment>
      <form onSubmit={submitHandler}>
        <input onChange={inputHandler} type="text" />
        <button type="submit">Search</button>
      </form>
    </React.Fragment>
  );
}
