
import { useState, useContext } from "react";
import { EstoqueContext } from "../context/EstoqueContext";



function CadastroProduto() {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [precoUnitario, setPrecoUnitario] = useState(0);
  const { dispatch } = useContext(EstoqueContext);

  const adicionar = () => {
    //feito para não aceitar campo nome vazio, quantidade negativo ou zero e preco unitario negativo
    if (!nome.trim() || quantidade < 1 || precoUnitario < 0) 
        return(alert("Preencha corretamente os Campos!"));
    /*dispara a ação */
    dispatch({
      type: "ADICIONAR",
      payload: {
        nome,
        quantidade: Number(quantidade),
        precoUnitario: Number(precoUnitario),
        valorTotal: quantidade * precoUnitario,
      },
    });

    setNome("");
    setQuantidade(0);
    setPrecoUnitario(0);
  };

  return (
    <div>
      <h2>Cadastro de Produto</h2>
      <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
      <input type="number" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} placeholder="Quantidade" />
      <input type="number" value={precoUnitario} onChange={(e) => setPrecoUnitario(e.target.value)} placeholder="Preço Unitário" />
      <button onClick={adicionar}>Adicionar</button>
    </div>
  );
}

export default CadastroProduto;
