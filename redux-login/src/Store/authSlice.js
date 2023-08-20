import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userName: "",  //useSelector(state=>state.auth.userName)
    email: "",  // useSelector(state=>state.auth.email)
};

export const authslice = createSlice({   
    name: "auth",
    initialState,
    reducers: {
        setUserName: (state, action) => { //dispatch(setUserName("sahil"))
            state.userName = action.payload;
        },
        setEmail: (state, action) => {  //dispatch(setEmail("sahil@gmail.com"))
            state.email = action.payload;
        }
    }
});

export const { setUserName , setEmail} = authslice.actions;
export default authslice.reducer;