import React from "react";
import fetchData from "../api/api";

export default function NavBtn(props) {
  const ClickHandler = async () => {
    const result = await fetchData(props.name);
    props.setData(result);
  };

  return (
    <div>
      <button
        onClick={ClickHandler}
        className="nav-button rounded bg-orange-800	 hover:bg-blue-700 py-2 px-4 text-white"
      >
        {props.name}
      </button>
    </div>
  );
}
