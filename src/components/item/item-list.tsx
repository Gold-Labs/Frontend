import Items from "./item";
import styled from "styled-components";

const ItemsList = styled.ul`
  margin-left: -8px;
  margin-right: -8px;
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  max-width: 1050px;
  margin: auto;
`;

export default function ItemList() {
  const count = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <ItemsList>
      {count.map((item) => (
        <Items count={item} />
      ))}
    </ItemsList>
  );
}
