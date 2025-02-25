import React, { createContext, useState, useEffect } from 'react';
import { socialLogout, userInfo } from '../apis/AuthApi';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [nickname, setNickname] = useState("");
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const storedNickname = localStorage.getItem("nickname");
    const storedProfileImg = localStorage.getItem("profileImg");

    if (token) {
      setAccessToken(token);
    }
    if (storedNickname) {
      setNickname(storedNickname);
    }
    if (storedProfileImg) {
      setProfileImg(storedProfileImg);
    }
  }, []);

  const login = (token) => {
    setAccessToken(token);
    localStorage.setItem("accessToken", token);
    getUserInfo(token);
  };

  const logout = () => {
    setAccessToken(null);
    setNickname("");
    setProfileImg("");
    socialLogout(accessToken)
      .then(res => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("nickname");
        localStorage.removeItem("profileImg");
      })
      .catch(err => console.log(err))
  };

  const getUserInfo = (token) => {
    userInfo(token)
      .then(res => {
        const nick = res.data.data.nickname;
        const img = res.data.data.profileImageUrl;
        setNickname(nick);
        setProfileImg(img);
        localStorage.setItem("nickname", nick);
        localStorage.setItem("profileImg", img);
      })
      .catch(err => console.log(err));
  }

  return (
    <AuthContext.Provider value={{ accessToken, login, logout, nickname, profileImg }}>
      {children}
    </AuthContext.Provider>
  );
};
