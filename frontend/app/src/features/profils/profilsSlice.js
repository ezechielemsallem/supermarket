import {  createSlice ,createAsyncThunk} from '@reduxjs/toolkit';
import { getProfil } from './profilsAPI';

const initialState = {
    id: 0,
    user: 0,
    address:"", 
    image: "",


};

export const getProfilAsync = createAsyncThunk(
    'profil/getProfil',
    async () => {
      const response = await getProfil();
      return response.data;
    }
  );
  


export const profilSlice = createSlice({
  name: 'profil',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfilAsync.fulfilled, (state, action) => {
        
        state.id = action.payload.id
        state.address = action.payload.address
        state.image= action.payload.image
        state.user = action.payload.user
      })
      
  },
});




export const selectUser = (state) => state.profil.user;
export const selectAddressUser = (state) => state.profil.address;
export const selectImageUser = (state) => state.profil.image;


export default profilSlice.reducer;
