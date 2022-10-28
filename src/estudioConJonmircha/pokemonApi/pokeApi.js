import { useState, useEffect } from "react";
import { Pokemon } from "./pokemon";
import { getPokemons } from "./helpers/getPokemons";

const pokemonsX = [
  { id: 1, name: "Pichu", avatar: "Imagen de pichu" },
  { id: 2, name: "Pikachu", avatar: "Imagen de pikachu" },
  { id: 3, name: "Raychu", avatar: "Imagen de raychu" },
];

export const PokeApi = () => {
  const [pokemons, setPokemons] = useState(pokemonsX);

  useEffect(() => {
    const pokemones = getPokemons();
    console.log(pokemones);
    pokemones.then((x) => setPokemons(x));
  }, []);

  return (
    <>
      <h1
        className="text-4xl font-semibold outline-blue-700 shadow-lg
       shadow-blue-700 text-yellow-400 mb-6"
      >
        Peticiones Asíncronas en Hooks
      </h1>
      {pokemons.length === 0 ? (
        <h1 className="text-2xl mb-2 text-red-700 font-medium">Cargando...</h1>
      ) : (
        <div className="flex flex-wrap justify-evenly">
          {pokemons.map((el) => (
            <Pokemon key={el.id} id={el.id} name={el.name} avatar={el.avatar} />
          ))}
        </div>
      )}
    </>
  );
};
