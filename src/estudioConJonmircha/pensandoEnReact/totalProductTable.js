import { ProductTable } from "./productTable";

export function TotalProductTable({ dataProducts, inStockOnly, filterText}) {

  let types
  const tables = []

  types = dataProducts.map((product) => product.category);
  types = [...new Set(types)];

  for(let type of types){
    tables.push(dataProducts.filter((elem) => elem.category === type))
  }

  const dataProductsX = tables.map((productType, index) => {
    return < ProductTable key={index} productType={productType} inStockOnly={inStockOnly} filterText={filterText}/>
  })

  return (
    <>
      <div className="bg-transparent mx-48">
        <div className="flex justify-evenly text-white">
          <h1>Name</h1>
          <h1>Price</h1>
        </div>
        {dataProductsX}
      </div>
    </>
  );
}
