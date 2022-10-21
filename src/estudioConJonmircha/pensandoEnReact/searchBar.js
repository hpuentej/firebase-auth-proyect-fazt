export function SearchBar({filterText, handleCheckBox, handleChangeInput}) {
  
  return (
    <>
      <div
        className="flex flex-col flex-wrap items-center bg-blue-300 mx-48 mt-10 pb-2
                   rounded-t-md text-slate-900 font-serif"
      >
        <input
          type="text"
          value={filterText}
          placeholder="Search..."
          className="mt-5 w-48 p-1 rounded-sm"
          onChange={handleChangeInput}
        />
        <div>
          <input
            type="checkbox"
            name="stock"
            id="stock"
            className="mr-2 rounded-sm"
            onChange={handleCheckBox}
          />
          <label htmlFor="">Only show products in stock</label>
        </div>
      </div>
    </>
  );
}
