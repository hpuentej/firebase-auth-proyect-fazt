import React from 'react'
import { useCounter } from './hooks/useCounter'

export const CounterApp = () => {
  const [count, increment, decrement, reset] = useCounter(5);
  return (
    <div className='text-2xl'>
      <h1>{`Clicks: ${count}`}</h1>
      <button onClick={increment}>Mas 1</button>
      <button onClick={decrement}>Menos 1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

