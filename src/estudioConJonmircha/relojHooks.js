import { useState, useEffect } from "react";

function Reloj({ hora }) {
  return <h1>{hora}</h1>;
}

export function RelojHooks() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [visible, setVisible] = useState(false);

  let temporizador = null;

  const tictac = () => {
    temporizador = setInterval(
      () => setHora(new Date().toLocaleTimeString()),
      1000
    );
  };

  const iniciar = () => {
    tictac();
    setVisible(true);
  };

  const detener = () => {
    clearInterval(temporizador);
    setVisible(false);
  };

  return (
    <>
      <h1 className="text-yellow-600 font-semibold text-2xl mb-2">
        Ciclo de vida con Hooks
      </h1>
      <div className="bg-teal-700 mb-3 mx-48">
        {visible ? <Reloj hora={hora} /> : <h1>Aquí irá el Reloj</h1>}
      </div>
      <button onClick={iniciar} className="px-3 bg-rose-300 mr-2 rounded-md">
        Iniciar
      </button>
      <button onClick={detener} className="px-3 bg-rose-300 rounded-md mb-5">
        Detener
      </button>
    </>
  );
}
