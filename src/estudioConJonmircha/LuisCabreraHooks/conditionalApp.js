import { useState } from "react";

const initialCart = [
  {id: 1, name: 'Producto 1', price: 100},
  {id: 2, name: 'Producto 2', price: 200},
  {id: 3, name: 'Producto 3', price: 300},
]

export const ConditionalApp = () => {

  const [cart, setCart] = useState(initialCart);

  return (
    <>
      <h1>ConditionalApp</h1>
    </>
  )
}
