import { createContext, useReducer } from "react";

// useContext foi usado para qualquer componente conseguir acessar o valor do estoque.
export const EstoqueContext = createContext();

// o useReducer foi utilizado para para gerenciar as ações de adicionar e remover produtos.
const estoqueReducer = (state, action) => {
  switch (action.type) {
    case "ADICIONAR":
      return [...state, action.payload];
    case "REMOVER":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

export const EstoqueProvider = ({ children }) => {
  const [estoque, dispatch] = useReducer(estoqueReducer, []);

  return (
    <EstoqueContext.Provider value={{ estoque, dispatch }}>
      {children}
    </EstoqueContext.Provider>
  );
};
