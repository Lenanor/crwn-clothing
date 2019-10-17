import React from "react";
import { connect } from "react-redux";
import {
  addItem,
  removeItem,
  clearItemFromCart
} from "../../redux/cart/cart.actions";

import {
  CheckOutItemContainer,
  ImageContainer,
  QuantityContainer,
  NameContainer,
  RemoveButtonContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}> &#10094; </div>
        <span> {quantity} </span>
        <div onClick={() => addItem(cartItem)}> &#10095; </div>
      </QuantityContainer>
      <span>${price}</span>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckOutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
