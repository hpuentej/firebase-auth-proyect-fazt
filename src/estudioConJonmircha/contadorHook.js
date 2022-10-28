import { useState } from "react";

function Boton({signo, handleClickOne }) {

  const handleClickOperation = () => {
    handleClickOne(signo);
  }

  return (
    <>
      <button
        onClick={handleClickOperation}
        className="bg-cyan-800 rounded-lg p-1"
      >
        {" "}
        {signo}
      </button>
    </>
  );
}

export function Contador() {
  let [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(() => contador + 6)
    setContador(x => x + 1)
    setContador(x => x + 1)
  }
  const restar = () => setContador(contador - 1)

  const signo = {
    sumar: "+",
    restar: "-",
  };

  const handleClickOne = (oper) => {
    if (oper === "+") {
      sumar()
    } else if (oper === "-") {
      restar()
    }
  };

  return (
    <>
      <h1>{contador}</h1>
      <Boton signo={signo.sumar} handleClickOne={handleClickOne} />
      <Boton signo={signo.restar} handleClickOne={handleClickOne} />
    </>
  );
}
