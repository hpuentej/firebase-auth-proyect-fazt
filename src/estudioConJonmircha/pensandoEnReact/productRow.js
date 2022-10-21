export function ProductRow({product, index}) {  
  return ( 
    <>
    <li className="bg-red-400 flex justify-between text-slate-800 px-24" key={index}>
      <h1 className="">{product.name}</h1>
      <h1 className="self-end">{product.price}</h1>
    </li>
    </>
  )
  }

