export const getRandomDog = async (imageId, breeds) => {
  let url;
  if (imageId === undefined || imageId === "0") {
    url = "https://api.thedogapi.com/v1/images/search";
  } else {
    url = `https://api.TheDogAPI.com/v1/images/search?breed_ids=${imageId}`;
  }
  const res = await fetch(url);
  const [dogImage] = await res.json();
  
  const { url: urlX } = dogImage;  

  let [breedName] =
    breeds !== null
      ? breeds.filter((breed) => +imageId === breed.id)
      : [{ name: "Random" }];

  const nombre = breedName === undefined ? 'Random' : breedName.name
  const idX = breedName !== undefined? breedName.id : 0

  const newImage = {
    id: idX,
    url: urlX,
    name: nombre
  };
  return newImage;
};
