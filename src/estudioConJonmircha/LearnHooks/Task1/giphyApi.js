export const giphyApi = async (string) => {
  const GiPHY_API_KEY = '2cZkiFTqyiS79UdSapL6LHWlublpl7iy'
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?q=${string}&api_key=${GiPHY_API_KEY}`)
  const gift = await res.json()  
  const {data} = gift
  const newGift = data[0]?.images?.downsized.url  
  return newGift
}

