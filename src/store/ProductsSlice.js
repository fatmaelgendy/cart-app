import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts=createAsyncThunk("ProductsSlice/fetchProducts",async()=>{
    const res= await fetch("https://fakestoreapi.com/products");
    const data= await res.json();
    return data;
});

const ProductsSlice=createSlice({
    initialState:[],
    name:"ProductsSlice",
    reducres:{

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
          state=action.payload;
          return action.payload;})
        }
    

});

export const{}=ProductsSlice.actions;
export default ProductsSlice.reducer;