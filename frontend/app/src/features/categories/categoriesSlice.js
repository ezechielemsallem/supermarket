import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllCategories, addCategorie } from './categoriesAPI';


const initialState = {
  categories: [],
};


export const getCategoriesAsync = createAsyncThunk(
  'categories/getAllCategories',
  async () => {
    const response = await getAllCategories();

    return response.data;
  }
);

export const addCategorieAsync = createAsyncThunk(
  'categories/addCategorie',
  async (data) => {
    const response = await addCategorie(data);

    return response.data;
  }
);



export const CategoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesAsync.fulfilled, (state, action) => {
        state.categories = action.payload
      })
      .addCase(addCategorieAsync.fulfilled, (state, action) => {
        state.categories.push(action.payload)
      })
      
  },
});




export const selectCategories = (state) => state.categories.categories;
export default CategoriesSlice.reducer;
