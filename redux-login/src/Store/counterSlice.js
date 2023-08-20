import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0  //useSelector((state)=>state.counter.count)
};

export const counterSlice = createSlice({   
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => { //dispatch(increment())
            state.count += 1
        },
        decrement: (state) => {  //dispatch(decrement())
            state.count -= 1
        },
        incrementBy: (state, action) => { //dispatch(incrementBy(100))
            state.count += action.payload
        },
        decrementBy: (state, action) => {  //dispatch(decrementBy(100))
            state.count -= action.payload
        }
    }
});

export const { increment , decrement, incrementBy, decrementBy } = counterSlice.actions;
export default counterSlice.reducer;