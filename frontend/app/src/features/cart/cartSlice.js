import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AddCommandDetails} from './cartAPI';

const initialState = {
  products: "",
  cart: [],
  totalCommand: 0,
};

export const AddCommandDetailsAsync = createAsyncThunk("products/AddCommandDetails", async (newProd) => {
  
  const token = localStorage.getItem("access")
  
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  };

  
  const response = await AddCommandDetails(newProd, config);
  
  return response;
});




export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
        
        removeProductInCart: (state,action)=>{
          let newProduct = action.payload;
          {
            for (let i = 0; i < state.cart.length; i++) {
              if (state.cart[i].product.nameProduct === newProduct.nameProduct) {
                state.totalCommand -= state.cart[i].price
                state.cart = state.cart.filter(product => product.product.nameProduct != state.cart[i].product.nameProduct)
                break;
              }
            }
          }
        },
        substractProduct: (state, action)=>{
          let newProduct = action.payload;
          let productExists = false;
          
          {
            for (let i = 0; i < state.cart.length; i++) {
              if (state.cart[i].product.nameProduct === newProduct.nameProduct) {
                state.cart[i].amount -= 1;
                state.cart[i].price = state.cart[i].amount * state.cart[i].product.price
                productExists = true;
                state.totalCommand -= newProduct.price
                if (state.cart[i].amount == 0){
                  state.cart = state.cart.filter(product => product.product.nameProduct != state.cart[i].product.nameProduct )
                }
                break;
              }
            }
          }
        },
        addOneProduct: (state, action)=>{
          let newProduct = action.payload;
          {
            for (let i = 0; i < state.cart.length; i++) {
              if (state.cart[i].product.nameProduct === newProduct.nameProduct) {
                state.cart[i].amount += 1;
                state.cart[i].price = state.cart[i].amount * state.cart[i].product.price
                state.totalCommand += newProduct.price
                break;
              }
            }
            
          }

        },
        add2cart: (state, action) => {
          let newProduct = action.payload;
          let productExists = false;
          
          {
            for (let i = 0; i < state.cart.length; i++) {
              if (state.cart[i].product.nameProduct === newProduct.nameProduct) {
                state.cart[i].amount += 1;
                state.cart[i].price = state.cart[i].amount * state.cart[i].product.price
                productExists = true;
                state.totalCommand += newProduct.price
                break;
              }
            }
            if (!productExists) {
              let data = {
                product: newProduct,
                amount: 1,
                price: newProduct.price * 1
              }
              state.cart.push(data);
              state.totalCommand += data.price
              
            }
          }
        },

    
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddCommandDetailsAsync.fulfilled, (state, action) => {
        state.products = [...state.products, action.payload];
        state.cart = []
        state.totalCommand = 0
      })
  },
  

  
});

export const { add2cart, substractProduct, removeProductInCart, addOneProduct } = CartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export const selectTotalProduct = (state) => state.cart.totalCommand;
export const selectTotal = (state) => state.cart.total;
export default CartSlice.reducer;
