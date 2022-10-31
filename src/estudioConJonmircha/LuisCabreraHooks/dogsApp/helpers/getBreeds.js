export const getBreeds = async() => {
  const url = "https://api.thedogapi.com/v1/breeds"
  const res = await fetch(url)
  const newBreeds = await res.json()
  return newBreeds
}