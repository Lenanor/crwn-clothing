import { createSelector } from "reselect";

//input selector (takes a 'slice' out of state)
const selectCart = state => state.cart;

// output selector (uses createSelector which makes it a
// memoized selector so that the cart items won't have to
// rerender if nothing is changed)
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

// Memoized output selector for cart dropdown
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

// Memoized output selector for cart total amount
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
);

// Memoized output selector for cart icon quantity
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);
