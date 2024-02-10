import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    value:0,
    cube:0,
    color:"black"
}

const counterSlice = createSlice(
    {
        name:"counter",
        initialState,
        reducers:{
            increment:(state)=>{
                state.value = state.value + 10;
                
            },
            decrement:(state)=>{
                state.value = state.value - 10;
            },
            cube:(state,action)=>{
                state.cube = action.payload * action.payload * action.payload;
            },
            theme:(state,action)=>{
                state.color = action.payload;
            }
        }
    }
)

export const {increment,decrement,cube,theme} = counterSlice.actions;
export default counterSlice.reducer;