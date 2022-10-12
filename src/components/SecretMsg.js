import { useState } from "react";

// Custom hook
function useTruth(initialState=true) {
  const [human, setHuman] = useState(initialState);
  const handleSer = () => setHuman(!human);
  const handleHuman = () => setHuman(true);
  const handleDios = () => setHuman(false);
  return [human, { handleSer, handleHuman, handleDios }];
}

// Component 1
export function Dios() {
  const [human, { handleSer, handleHuman, handleDios }] = useTruth();
  return (
    <>
      <div className="container mx-auto mb-4">
        <button onClick={handleSer} className="bg-red-300 p-3 rounded-lg mx-4">
          True/False
        </button>
        <button
          onClick={handleHuman}
          className="bg-orange-400 p-3 rounded-lg mx-4"
        >
          FixedHuman
        </button>
        <button
          onClick={handleDios}
          className="bg-blue-400 p-3 rounded-lg mx-4"
        >
          FixedDios
        </button>
      </div>
      {human ? <h1 className="mb-4">Human</h1> : <h1 className="mb-4">God</h1>}
    </>
  );
}

// Component 2
export function ShowInfo() {
  const [human, { handleSer}] = useTruth();
  return (
    <>
      <button onClick={handleSer} className="bg-green-400 p-3 rounded-lg mb-4" >{ human ? <h1>Show Info</h1> : <h1>Hide Info</h1> }</button>
    { human &&
      <div className="container mx-auto">
        <p className="text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur reprehenderit quod assumenda deleniti magni sequi reiciendis veniam libero earum nam, modi id unde suscipit doloremque et, fugiat atque optio. Alias. from Hans Puente.
        </p>
      </div>
}    </>
  );
}
