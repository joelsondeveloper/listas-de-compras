import React, { useRef, useState } from "react";
import { v4 } from "uuid";
import { ADDButton, Container, Produtos, Lixeira } from "./style";

function App() {
  const [produtos, setProdutos] = useState([]);
  const inputRef = useRef();

  function cliqueiNoBotao() {
    if (inputRef.current.value) {
      setProdutos([
        { id: v4(), nome: inputRef.current.value },
        ...produtos,
      ]);
      inputRef.current.value = "";
    }
  }

  function deletarProduto(id) {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  }

  return (
    <Container>
      <h1>Listas de compras</h1>
      <input placeholder="produto..." ref={inputRef} />
      <ADDButton onClick={cliqueiNoBotao}>adicionar</ADDButton>

      {produtos.map((produto) => (
        <Produtos key={produto.id}>
          <p>{produto.nome}</p>
          <Lixeira onClick={() => deletarProduto(produto.id)}>🗑️</Lixeira>
        </Produtos>
      ))}
    </Container>
  );
}

export default App;