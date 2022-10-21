import { ProductCategoryRow } from "./productCategoryRow.js";
import { ProductRow } from "./productRow.js";

export function ProductTable({ productType, inStockOnly}) {

  const type = productType[0].category  
  
  
  const stockedProducts = productType.filter((product) => {
    return product.stocked;
  });

  let products;

  if (!inStockOnly && productType.length !== 0) {
    products = productType.map((product, index) => (
      <ProductRow key={index} product={product} />
    ))    
  }

  else if (inStockOnly && stockedProducts.length !== 0) {
    products = stockedProducts.map((product, index) => (
      <ProductRow key={index} product={product} />    
    ));
    // console.log('Checked')
  } else {
    products = <h1>There're no products to display</h1>
  }
    
  return (
    <>
      <ProductCategoryRow type={type} />
      {products}
    </>
  );
}
