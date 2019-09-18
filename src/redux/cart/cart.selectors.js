import { createSelector } from "reselect";

//input selector
const selectCart = state => state.cart;

// output selector (uses createSelector which makes it a
// memoized selector so that the cart icon won't have to
// update every time state is changed)
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
