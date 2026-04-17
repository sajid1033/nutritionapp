import { SET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from "./actionType";
import type { Product } from "./product";
 

export const setProducts = (products: Product[]) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const addProduct = (product: Product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (id: number) => ({
  type: DELETE_PRODUCT,
  payload: id,
});
