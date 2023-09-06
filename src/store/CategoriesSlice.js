import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCategories=createAsyncThunk("Categories/fetchCategories",async()=>{
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data= await res.json();
    return data;
})


const CategoriesSlice=createSlice({
    name:"CategoriesSlice",
    initialState:[],
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCategories.fulfilled,(state,action)=>{
        return action.payload;}
        
)}
})
export const{}=CategoriesSlice.actions;
export default CategoriesSlice.reducer;