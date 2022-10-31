import { useState, useEffect } from "react";
import { getBreeds } from "../helpers/getBreeds";

const testBreeds = [
  { id: 1, name: "Pequines" },
  { id: 2, name: "Labrador" },
  { id: 3, name: "Lobo" },
];

export const Select = () => {
  const [breeds, setBreeds] = useState(testBreeds);

  useEffect(() => {
    updateBreeds()
  }, [])

  const updateBreeds = () => {
    getBreeds()
      .then((breeds) => {
        setBreeds(breeds)
      })
  }

  return (
    <>
      <select onChange = {() => alert('Hola Hans  ')}>
        {breeds.map((breed) => (
          <option key={breed.id} value={breed.id}>
            {breed.name}
          </option>
        ))}
      </select>
    </>
  );
};
