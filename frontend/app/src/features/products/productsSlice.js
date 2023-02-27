import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllProducts, getProduct, addProduct, delProduct, updProduct, getProductsOfCategorie } from './productsAPI';


const initialState = {
  products: [],
};

export const getProductsOfCategorieAsync = createAsyncThunk(
  'products/getProductsOfCategorie',
  async (id) => {
    const response = await getProductsOfCategorie(id);

    return response.data;
  }
);

export const getProdsAsync = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const response = await getAllProducts();

    return response.data;
  }
);
export const getOneProdAsync = createAsyncThunk(
  'products/getProduct',
  async (id) => {
    const response = await getProduct(id);
    return response.data;
  }
);

export const addProductAsync = createAsyncThunk("products/addProduct", async (newProd) => {
  const response = await addProduct(newProd);
  return response;
});

export const delProductAsync = createAsyncThunk("products/delProduct", async (id) => {
  const response = await delProduct(id);

  
  return response;
});

export const updProductAsync = createAsyncThunk(
  "products/updProduct",
  async (updData) => {
    const response = await updProduct(updData);
    return response.data;
  }
);


export const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProdsAsync.fulfilled, (state, action) => {
        state.products = action.payload

      })
      .addCase(getOneProdAsync.fulfilled, (state, action) => {
        state.products = action.payload
        
      })
      .addCase(getProductsOfCategorieAsync.fulfilled, (state, action) => {
        state.products = action.payload
        
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload];
      })

      .addCase(delProductAsync.fulfilled, (state, action) => {
        state.products = state.products.filter((x) => x.id !== action.payload);


      })
      .addCase(updProductAsync.fulfilled, (state, action) => {
        
        let myUpdProd = action.payload;
        let oldProd = state.products.find((x) => x.id === myUpdProd.id);
        oldProd.name = myUpdProd.name;
        oldProd.price = myUpdProd.price;
        oldProd.image = myUpdProd.image
        oldProd.categorieOfProduct = myUpdProd.categorieOfProduct
      });
  },
});




export const selectProducts = (state) => state.products.products;

export default ProductsSlice.reducer;
