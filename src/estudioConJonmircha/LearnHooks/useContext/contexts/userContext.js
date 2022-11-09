import { createContext, useState } from 'react' // create context is a function that returns an object with two properties: Provider and Consumer

const UserContext = createContext()

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(null)

  const login = () => {
    setUser({
      id: 2,
      name: "Hans Puente",
      email: "hpuentej@uni.pe",
      favoriteMovie: [1, 2],
    });
  };

  const logout = () => {
    setUser(null);
  };

  const toggleFavoriteMovie = (movieId) => {
    console.log(movieId)
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

