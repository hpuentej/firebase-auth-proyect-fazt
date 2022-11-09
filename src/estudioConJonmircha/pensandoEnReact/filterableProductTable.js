import { useState } from "react";
import { SearchBar } from "./searchBar.js";
import { TotalProductTable } from "./totalProductTable.js";

export function FilterableProductTable({ dataProducts }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleCheckBox = (event) => { 
    event.target.checked ? setInStockOnly(true) : setInStockOnly(false);    
  };

  const handleChangeInput = (event) => {
    setFilterText(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <>
      <div className="bg-slate-700 overflow-hidden">
        <SearchBar
          handleCheckBox={handleCheckBox}
          inStockOnly={inStockOnly}
          filterText={filterText}
          handleChangeInput={handleChangeInput}
        />
        <TotalProductTable
          dataProducts={dataProducts}
          inStockOnly={inStockOnly}
          filterText={filterText}
        />
      </div>
    </>
  );
}
