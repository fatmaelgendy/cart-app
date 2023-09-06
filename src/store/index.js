import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./ProductsSlice";
import CartSlice from "./CartSlice";
import CategoriesSlice from "./CategoriesSlice";


export const store=configureStore({
    reducer:
    {
        products:ProductsSlice,
        Cart: CartSlice,
        Categories: CategoriesSlice
        
    }
    
});