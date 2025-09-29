import { EstoqueProvider } from "./context/EstoqueContext";
import CadastroProduto from "./components/CadastroProduto";
import ListaEstoque from "./components/ListaEstoque";
import './App.css';

function App() {
  return (
    <EstoqueProvider>
      <div className="container">
        <h1>Controle de Estoque</h1>
        <CadastroProduto />
        <ListaEstoque />
      </div>
    </EstoqueProvider>
  );
}

export default App;
