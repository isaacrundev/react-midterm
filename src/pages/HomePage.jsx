import React, { useState } from "react";
import NavBtn from "../components/NavBtn";
import ItemList from "../components/ItemList";
import SearchBar from "../components/SearchBar";

import { v4 } from "uuid";

export default function HomePage() {
  const [data, setData] = useState([]);

  const ingredientList = ["vodka", "gin", "rum", "tequila"];
  return (
    <div>
      <div className="navbar">
        <div className="title container">
          <h1 className="text-center text-4xl text-white py-3">
            Cocktail Wiki
          </h1>
        </div>{" "}
        <SearchBar setData={setData} />
        <div className="nav-buttons flex justify-center	gap-5	py-4">
          {ingredientList.map((name) => {
            return (
              <NavBtn
                setData={setData}
                key={v4()}
                name={name[0].toUpperCase() + name.slice(1)}
              />
            );
          })}
        </div>
      </div>
      <hr />
      {data ? null : <ItemList list={data} />}
    </div>
  );
}
