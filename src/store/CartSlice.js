import { createSlice } from "@reduxjs/toolkit";


const CartSlice=createSlice({
    initialState:[],
    name:"CartSlice",
    reducers:{
        AddToCart:(state,action)=>{
        state.push(action.payload);
        },
        DeleteFromCart:(state,action)=>{
          return  state.filter((product)=>product.id !==(action.payload.id));
        },
        ClearCart:(state,action)=>{
            return [];
        }
    }
}

)
export const{AddToCart, DeleteFromCart, ClearCart}=CartSlice.actions;
export default CartSlice.reducer;