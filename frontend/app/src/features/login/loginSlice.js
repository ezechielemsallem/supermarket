import {  createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import { login,  signUp } from './loginAPI';
import jwt_decode from "jwt-decode";


const initialState = {
    username: '',
    id:'',
    logged: false,
    email: '',
    access: '',
    refresh: '',
    address: "",
    is_admin: false

};

export const loginAsync = createAsyncThunk(
    'login/login',
    async (cred) => {
      const response = await login(cred);
      return response.data;
    }
  );
export const signUpAsync = createAsyncThunk(
  'login/signUp',
  async (cred) => {
    const response = await signUp(cred);
    return response.data;
  }
);


export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout: (state) => {
        state.email=""
        state.logged=false
        state.username=""
        state.access=""
        state.refresh=""
        
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        const decoded = jwt_decode(action.payload.access);
            state.email=decoded.email
            state.logged=true
            state.username=decoded.username
            state.id = decoded.id
            state.access=action.payload.access
            state.refresh=action.payload.refresh
            state.address= decoded.address
            let is_superuser = decoded.is_superuser
            is_superuser == 1 ? state.is_admin = true : state.is_admin= false
            localStorage.setItem("access", state.access)
            
            
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        
        
        
        
      })
      
  },
});

export const {logout } = loginSlice.actions;
export const selectUserName = (state) => state.login.username;
export const selectEmail = (state) => state.login.email;
export const selectLogged = (state) => state.login.logged;
export const selectAccess =(state) =>  state.login.access;
export const selectAddress =(state) =>  state.login.address;
export const selectId = (state)=> state.login.id
export const selectIsAdmin = (state) => state.login.is_admin

export default loginSlice.reducer;
