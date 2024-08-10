import React, { createContext, useState, useContext } from 'react';

const PesquisaContext = createContext();

export const PesquisaProvider = ({ children }) => {
  const [pesquisasArray, setPesquisasArray] = useState([]);

  return (
    <PesquisaContext.Provider value={{ pesquisasArray, setPesquisasArray }}>
      {children}
    </PesquisaContext.Provider>
  );
};

export const usePesquisa = () => {
  return useContext(PesquisaContext);
};
