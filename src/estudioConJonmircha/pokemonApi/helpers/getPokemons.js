export const getPokemons = async () => {
  let url = 'https://pokeapi.co/api/v2/pokemon/?limit=12&offset=0'
  const res = await fetch(url)
  const json = await res.json()
  const pokeList = json.results
  // console.log(pokeList) // 
  const pokemonList = pokeList.map(async (poke) => {
    const res = await fetch(poke.url)
    const pokeX = await res.json()
    const {id, name, sprites} = pokeX
    // console.log(sprites.front_shiny)
    const avatar = sprites.front_shiny
    const obj = {id, name, avatar}
    // console.log(obj)
    return obj
  })

  // console.log(pokemonList)
  const pokemones = await Promise.all(pokemonList)

  return pokemones
}

