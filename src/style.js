import styled from "styled-components";

export const ADDButton = styled.button`
  background: #6cf000;
  color: #000;
  height: 35px;
  padding: 5px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-left: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

export const Container = styled.div `

background: #b752ff;
padding: 25px;
border-radius: 10px;

h1 {
    color: #fff;
}

input{
    height: 35px;
    border-radius: 5px;
    border: none;
    margin-top: 30px;
    outline: none;
    padding-left: 10px;
}

`

export const Produtos = styled.div `

display: flex;
justify-content: space-between;
height: 40px;
align-items: center;
background: white;
border-radius: 5px;
margin: 15px;
padding: 0 10px;

p {
    text-transform: capitalize;
    font-weight: bold;
}

`
export const Lixeira = styled.button `

background: transparent;
border: none;
cursor: pointer;
font-size: 20px;

`