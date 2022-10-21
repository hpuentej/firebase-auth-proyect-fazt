import {useState} from 'react'

function Boton({signo, handleClickOne}){
  return(
    <>
      <button onClick={() => handleClickOne(signo) } className="bg-cyan-800 rounded-lg p-1"> {signo}</button>
    </>
  )
}

export function Contador() {
  
  const [contador, setContador] = useState(0);

  const handleClickOne = (oper) => {
    if(oper === 'MAS 1'){
    setContador(contador + 1)}
    else if(oper === 'MENOS 1'){
      setContador(contador - 1)}
  }

  return (
    <>
      <h1>{contador}</h1>
      <Boton signo="MAS 1" handleClickOne={handleClickOne} />
      <Boton signo="MENOS 1" handleClickOne={handleClickOne} />
    </>
  )
}

