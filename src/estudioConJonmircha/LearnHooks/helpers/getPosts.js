export const getPosts = async (userdId) => {  
  const url = `https://jsonplaceholder.typicode.com/comments?postId=${userdId}`
  const res =  await fetch(url)
  const posts = res.json()
  return  posts
} 