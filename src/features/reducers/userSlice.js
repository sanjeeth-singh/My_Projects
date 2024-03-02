import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    loginDetails:{},
    isLogin:false
}

export const loginSlice = createSlice({
    name:'campaign',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.loginDetails={...action.payload}
            state.isLogin = true
    },
        logout:(state)=>{
            state.loginDetails= {};
            state.isLogin=false
        }
    }
})
var userReducer = loginSlice.reducer;
export var {login,logout} = loginSlice.actions;
export default userReducer
