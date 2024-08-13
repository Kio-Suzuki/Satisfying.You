import React, { createContext, useState, useContext } from 'react';

const PesquisaContext = createContext();

export const PesquisaProvider = ({ children }) => {

  const [txtPesquisa, setTxtPesquisa] = useState('');
  const [filtrado, setFiltrado] = useState('');
  const [pesquisas, setPesquisas] = useState([]);
  const [pesquisa, setPesquisa] = useState('aaa');

  return (
    <PesquisaContext.Provider value={{ txtPesquisa, setTxtPesquisa, filtrado, setFiltrado, pesquisas, setPesquisas, pesquisa, setPesquisa }}>
      {children}
    </PesquisaContext.Provider>
  );
};

export const usePesquisa = () => {
  return useContext(PesquisaContext);
};
