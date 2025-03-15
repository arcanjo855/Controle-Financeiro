import styled from "styled-components";

// Tipagem para o componente Th, que recebe props
interface ThProps {
  alignCenter?: boolean;
  width?: number;
}

export const Table = styled.table`
  max-width: 1200px;
  width: 98%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px; 
  max-width: 20px auto;
  margin: 20px auto;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th<ThProps>`
  border-bottom: insert;
  padding-bottom: 5px;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;