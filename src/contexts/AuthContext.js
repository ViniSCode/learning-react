import { createContext, useState } from 'react';

const AuthContext = createContext({
  isAuth: false,
  onLogOut: () => {},
  onLogIn: () => {},
});

export const AuthContextProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  function handleLogOut () {
    localStorage.clear();
    setIsAuth(false);
  }

  function handleLogIn () {
    setIsAuth(true);
    localStorage.setItem('isAuth', true);
  }

  return (
    <AuthContext.Provider value={{isAuth: isAuth, onLogOut: handleLogOut, onLogIn: handleLogIn}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;