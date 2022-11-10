import { createContext, useState } from 'react' // create context is a function that returns an object with two properties: Provider and Consumer

const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      id: 2,
      name: "Hans Puente",
      email: "hpuentej@uni.pe",
      favoriteMovies: [1, 2],
    });
  };

  const logout = () => {
    setUser(null);
  };

  const toggleFavoriteMovie = (movieId) => {
    if(user && user.favoriteMovies.includes(movieId)){
      setUser({
        ...user,
        favoriteMovies: user.favoriteMovies.filter((elem) => elem!==movieId)
      })
    } else if(user && !user.favoriteMovies.includes(movieId)){
      setUser({
        ...user,
        favoriteMovies: [...user.favoriteMovies, movieId]
      })
    } else {
      alert("No user detected")
    }
  }

  return(
    <>
      <UserContext.Provider value={{ user, login, logout, toggleFavoriteMovie }}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export default UserContext

