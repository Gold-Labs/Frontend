import styled from "styled-components";

interface ItemsProps {
  count: number;
}

const ItemsWrapper = styled.li`
  margin-bottom: 20px;
`;
const ItemsImgWrapper = styled(ItemsWrapper)`
  width: 249px;
  /* height: 320px; */
  /* height: 200px; */
`;
const ItemsImg = styled.img.attrs({
  src: "assets/images/product/product-image.jpg",
})`
  width: 100%;
  height: 100%;
`;

const ItemsInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-top: 10px;
`;

const ItemsInfo = styled.span<{ marginBottom: string; weight: string }>`
  margin-bottom: ${(props) => props.marginBottom};
  font-weight: ${(props) => props.weight};
`;

const ItemsDC = styled.span`
  color: orange;
`;

const ItemsCost = styled.span`
  text-decoration: line-through;
  color: gray;
  font-size: 14px;
`;

export default function Items(props: ItemsProps) {
  return (
    // <!-- A item with given width -->
    <ItemsWrapper>
      <ItemsImgWrapper>
        <ItemsImg />
      </ItemsImgWrapper>
      <ItemsInfoWrapper>
        <ItemsInfo marginBottom="10px" weight="normal">
          전통주
        </ItemsInfo>
        <ItemsInfo marginBottom="5px" weight="bold">
          <ItemsDC>3%</ItemsDC>
          5200원
        </ItemsInfo>
        <ItemsCost>5400원</ItemsCost>
      </ItemsInfoWrapper>
    </ItemsWrapper>
  );
}
