/*
import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth_mod } from '../config/firebase';

const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = auth_mod.onAuthStateChanged((user) => {
      setUsuario(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}

export function useUsuario() {
  return useContext(UsuarioContext);
}

*/

import React, { createContext, useState, useContext } from 'react';

const UsuarioContext = createContext();

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);

  return (
    <UsuarioContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};

export const useUsuario = () => {
  return useContext(UsuarioContext);
};
