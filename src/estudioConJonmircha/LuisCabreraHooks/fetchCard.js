import { useEffect, useState } from 'react';
import {getUser} from './helpers/getUser';
import {getPosts} from './helpers/getPosts';

// const initialUser = {
//   name: "Hans Puente",
//   email: "hpuentej@uni.pe"
// }

// const initialPosts = [
//   {
//     id: 1,
//     title: "title 1",
//     body: "body 1"
//   },
//   {
//     id: 2,
//     title: "title 2",
//     body: "body 2"
//   },
//   {
//     id: 3,
//     title: "title 3",
//     body: "body 3"
//   }
// ]

export function FetchCard(){
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const updateUser = () => {
    getUser()
      .then((newUser) => {
        setUser(newUser)
      })
  }

  useEffect(() => { 
    updateUser() 
  }, [])

  useEffect(() => {
    const updatePosts = () => {
      getPosts(user.id)
        .then((newPosts) => {
          setPosts(newPosts)
      })
    }

    if(user?.id){
      updatePosts()
    }
  }, [user])

  const postList = posts.map((post) => {
    return (
      <li key={post.id}>
        <p>{post.name}</p>
      </li>
    )
  })

  return (
    <>
      <button onClick = {updateUser} className="bg-lime-700 rounded-md p-1 hover:bg-lime-400 hover:text-lime-900 mb-2 hover:font-semibold">
        Another user
      </button>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>
      <h1>Posts - user: {user.id}</h1>
      <ul>
        {postList}
      </ul>

    </>
  )
}


