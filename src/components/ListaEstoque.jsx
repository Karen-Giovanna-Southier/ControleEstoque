import { useContext, useMemo } from "react";
import { EstoqueContext } from "../context/EstoqueContext";



function ListaEstoque() {
    // acessar o componente do estoque EstoqueContext e extrai/ desestrutura duas coisas de lá - os produtos e as funções 
  const { estoque, dispatch } = useContext(EstoqueContext);

  //useMemo foi escolhido para melhorar a performance - vai armazenar o valor total do estoque e só atualiza quando o valor for diferente e não toda vez que renderizar.
  const totalEstoque = useMemo(() => {
    //acc - acumulador, usado para soma de valores e item - parâmetros 
    return estoque.reduce((acc, item) => acc + item.valorTotal, 0);
  }, [estoque]);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Qtd</th>
            <th>Preço Unitário</th>
            <th>Total</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {estoque.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
              <td>{item.precoUnitario}</td>
              <td>{item.valorTotal}</td>
              <td>
                <button onClick={() => dispatch({ type: "REMOVER", payload: index })}>
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Total em Estoque: R$ {totalEstoque.toFixed(2)}</h3>
    </div>
  );
}

export default ListaEstoque;
