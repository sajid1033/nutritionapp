import { SET_PRODUCTS, ADD_PRODUCT, DELETE_PRODUCT } from "./actionType";
import type { Product } from "./product";
 
type ProductState = {
  products: Product[];
};

const initialState: ProductState = {
  products: [],
};

export const productReducer = (state = initialState, action: any)
                                : 
                                ProductState =>    
     {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };

    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
      };



    default:
      return state;
  }
};
