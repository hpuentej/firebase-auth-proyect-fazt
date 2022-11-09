export const getUser = async () => {
  const userId = Math.floor(Math.random()*10) + 1 
  const url = "https://jsonplaceholder.typicode.com/users/" + userId
  const res =  await fetch(url)
  const user = res.json()
  return  user
} 