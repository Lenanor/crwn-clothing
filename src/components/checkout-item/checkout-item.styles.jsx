import styled from "styled-components";

const width23 = "width: 23%;";

export const CheckOutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  span {
    width: 23%;
  }
`;

export const ImageContainer = styled.div`
  ${width23}
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const NameContainer = styled.span`
  ${width23}
`;

export const QuantityContainer = styled.span`
  ${width23}
  display: flex;
  span {
    text-align: center;
  }
  div {
    cursor: pointer;
  }
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
