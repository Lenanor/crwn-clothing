import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionItemImage,
  CollectionFooterContainer,
  CollectionFooterName,
  CollectionFooterPrice,
  CollectionItemButton
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <CollectionItemImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <CollectionFooterName>{name}</CollectionFooterName>
        <CollectionFooterPrice>${price}</CollectionFooterPrice>
      </CollectionFooterContainer>
      <CollectionItemButton
        className='custom-button'
        onClick={() => addItem(item)}
        inverted
      >
        ADD TO CART
      </CollectionItemButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
