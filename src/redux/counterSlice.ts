import { createSlice } from "@reduxjs/toolkit"


interface counterState {
    value: number
}

const initialState : counterState = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state){
            state.value++;
        },
        decrement(state){
           state.value--;
        }
    }
})

export const { increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;