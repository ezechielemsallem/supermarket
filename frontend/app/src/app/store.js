import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import  CategoriesReducer from '../features/categories/categoriesSlice';

import commandsReducer from '../features/commands/commandsSlice';



import loginReducer from '../features/login/loginSlice';
import productsReducer from '../features/products/productsSlice';
import ProfilsReducer from '../features/profils/profilsSlice';


export const store = configureStore({
  reducer: {
    
    products: productsReducer,
    login: loginReducer,
    cart: cartReducer,
    profil: ProfilsReducer,
    commands: commandsReducer,
    categories: CategoriesReducer
    
    
    
    

  

  },
});
