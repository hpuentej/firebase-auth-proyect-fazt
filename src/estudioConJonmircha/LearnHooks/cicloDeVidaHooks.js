import {useState, useEffect} from 'react';

// console.log('Pre-render')  

export const CicloDeVida = () => {
  console.log('Logic render')
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
    
  useEffect(() => {
    console.log('USE EFFECT NO DEPENDENCY')
    return () => {
      console.log('CLEAN UP USE EFFECT NO DEPENDENCY')
    }
  })
  
  useEffect(() => {
    console.log('USEEFFECT []');
    return () => {
      console.log('CLEAN UP USEEFFECT []');
    }
  }, [])
  
  useEffect(() => {
    console.log('USEEFFECT [counter1]');
    return () => {
      console.log('CLEAN UP USEEFFECT [counter1]');
    }
  }, [counter1])
  
  useEffect(() => {
    console.log('USEEFFECT [counter2]');
    return () => {
      console.log('CLEAN UP USEEFFECT [counter2]');
    }
  }, [counter2])

  useEffect(() => {
    console.log('USEEFFECT [counter1, counter2]');
    return () => {
      console.log('CLEAN UP USEEFFECT [counter1, counter2]');
    }
  }, [counter1, counter2])

  return (
    <div>
      {console.log('return render')}
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

