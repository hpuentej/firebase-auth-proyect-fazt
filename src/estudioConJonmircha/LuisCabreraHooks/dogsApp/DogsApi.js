import { useState, useEffect, useCallback } from "react";
import { Select } from "./components/Select";
import { Card } from "./components/Card";
import { getBreeds } from "./helpers/getBreeds";
import { Error } from "./components/Error"
import { getRandomDog } from "./helpers/getRandomDog";

export function DogsApi() {
  const [breeds, setBreeds] = useState(null);
  const [chosenBreed, setChosenBreed] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    updateBreeds();
  }, []);

  const updateDogImage = useCallback(
    (imageId) => {
      setLoading(true);
      getRandomDog(imageId, breeds)
        .then((newImage) => {
        setChosenBreed(newImage);
        setLoading(false);
      }).catch(
        () => {
          setError("Error al cargar la imagen");
          setLoading(false);
        }
      )
    },
    [breeds]
  );

  useEffect(() => {
    updateDogImage();
  }, [updateDogImage]);

  const updateBreeds = () => {
    setLoading(true);
    getBreeds()
      .then((breeds) => {
        setBreeds(breeds);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
        setError("Error al cargar las razas");
        setLoading(false)
      });
    
  };

  return (
    <>
      <h1 className="text-5xl mb-5">DogsApi</h1>

      {breeds ? (
      <div className="flex flex-col items-center">
        <Select
          breeds={breeds}
          updateDogImage={updateDogImage}
          error={error}
          loading={loading}
        />
        <Card
          breeds={breeds}
          chosenBreed={chosenBreed}
          updateDogImage={updateDogImage}
          loading={loading}
        />
      </div>
      ) : (
       error && <Error error={'Error en cargar la imagen'}/>
      )
      }
    </>
  );
}
