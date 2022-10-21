export function ProductRow({ product, index }) {
  let formato; 
  if(product.stocked){
    formato = "bg-green-400 flex justify-between text-slate-800 px-24"
  } else {
    formato = "bg-red-400 flex justify-between text-slate-800 px-24"
  }

  return (
    <>
      <li  
        className={formato}
        key={index}
      >
        <h1>{product.name}</h1>
        <h1 className="self-end">{product.price}</h1>
      </li>
    </>
  );
}
