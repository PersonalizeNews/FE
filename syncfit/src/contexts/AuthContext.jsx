import React, { createContext, useState, useEffect } from 'react';
import { socialLogout } from '../apis/AuthApi';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setAccessToken(token);
    }
  }, []);

  const login = (token) => {
    setAccessToken(token);
    localStorage.setItem("accessToken", token);
  };

  const logout = () => {
    setAccessToken(null);
    socialLogout(accessToken)
      .then(res => {
        console.log(res)
        localStorage.removeItem("accessToken");
      })
      .catch(err => console.log(err))
  };

  return (
    <AuthContext.Provider value={{ accessToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
