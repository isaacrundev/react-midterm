import React from "react";
import { v4 } from "uuid";

export default function ItemList(props) {
  return (
    <>
      <div className="bg-slate-800	">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-14 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {props.list.map((item) => (
              <a key={v4()} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={item.strDrinkThumb}
                    alt={item.strDrink}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-white">{item.strDrink}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
