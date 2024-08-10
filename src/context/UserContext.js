import React, { createContext, useState, useContext } from 'react';

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [email, setEmailUsuario] = useState(null);
  const [uid, setUidUsuario] = useState(null);

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario, email, setEmailUsuario, uid, setUidUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => {
  return useContext(UsuarioContext);
};
