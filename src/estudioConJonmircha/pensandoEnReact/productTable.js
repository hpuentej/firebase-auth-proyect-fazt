import { ProductCategoryRow } from "./productCategoryRow.js";
import { ProductRow } from "./productRow.js";

export function ProductTable({ productType, inStockOnly, filterText }) {
  const type = productType[0].category;
  let products;
  let stockedProducts;
  let lostProduct

  if (filterText.trim() === "") {
    stockedProducts = productType.filter((product) => product.stocked)

    if (!inStockOnly && productType.length !== 0) {
      products = productType.map((product, index) => (
        <ProductRow key={index} product={product} />
      ));
    } else if (inStockOnly && stockedProducts.length !== 0) {
      products = stockedProducts.map((product, index) => (
        <ProductRow key={index} product={product} />
      ));
      
    } else {
      products = <h1>There're no products to display</h1>;
    }
  } 
  
  else if(!inStockOnly) {
    lostProduct = productType.filter((product) => product.name.toLowerCase() === filterText.toLowerCase())
    products = lostProduct.map((product, index) => ( 
      <ProductRow key={index} product={product} />
    ))
  }
  
  else if(inStockOnly){
    lostProduct = productType.filter((product) => product.name.toLowerCase() === filterText.toLowerCase())
    stockedProducts = lostProduct.filter((product) => product.stocked === true)
    products = stockedProducts.map((product, index) => ( 
      <ProductRow key={index} product={product} />
    ))
  }
  return (
    <>
      <ProductCategoryRow type={type} />
      {products}
    </>
  );
}
