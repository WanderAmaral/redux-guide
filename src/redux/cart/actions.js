import CartActionTypes from "./action-types";

export const addProductToCard = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
})