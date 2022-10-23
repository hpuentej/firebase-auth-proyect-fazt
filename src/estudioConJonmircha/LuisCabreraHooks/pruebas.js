import {useState, useEffect} from 'react';

export const UsoUseEffect = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  
  
  useEffect(() => {
    console.log('USE EFFECT NO DEPENDENCY: Muchas veces, cuando carga el componente y cuando se actualiza cualquiera de los estados');
  })
  
  useEffect(() => {
    console.log('USEEFFECT []: Una vez, cuando carga del componente');
  }, [])
  
  useEffect(() => {
    console.log('USEEFFECT [counter1]: Muchas vez, una vez cuando carga del componente y cada vez que se actualiza el estado de counter1');
  }, [counter1])
  
  useEffect(() => {
    console.log('USEEFFECT [counter2]: Muchas vez, una vez cuando carga del componente y cada vez que se actualiza el estado de counter2');
  }, [counter2])

  useEffect(() => {
    console.log('USEEFFECT [counter1, counter2 ]: Muchas vez, una vez cuando carga del componente y cada vez que se actualiza el estado de counter1 o counter2');
  }, [counter1, counter2])

  return (
    <div>
      <h1>Clicks c1: {counter1}</h1>
      <h1>Clicks c2: {counter2}</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>
        Increment c1
      </button>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment c2
      </button>
    </div>
  )
}

