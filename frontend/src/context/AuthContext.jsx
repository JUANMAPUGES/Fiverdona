import { createContext, useEffect, useState } from 'react';
import { getOwnUser } from '../utilities/index';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await getOwnUser(token);

        setUser(data);
      } catch (error) {
        setToken('');
        setUser(null);
      }
    };

    if (token) getUser();
  }, [token, setToken]);

  const logout = () => {
    setToken('');
    setUser(null);
  };

  const login = (token) => {
    setToken(token);
  };

  return (
    <AuthContext.Provider value={{ token, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
