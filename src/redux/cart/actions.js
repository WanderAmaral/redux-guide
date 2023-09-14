import CartActionTypes from "./action-types";

export const addProductsToCard = (payload) => ({
    type: CartActionTypes.ADD_PRODUCTS,
    payload,
})