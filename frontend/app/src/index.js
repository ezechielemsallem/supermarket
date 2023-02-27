import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Login } from './features/login/Login';
import { Products} from './features/products/Products';
import { MyCart } from './features/cart/Cart';
import { Profil } from './features/profils/Profils';
import { Register } from './features/login/Register';
import { CommandsList } from './features/commands/Commands_list';
import { CommandDetails } from './features/commands/Command_details';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/"  element={ <Products></Products>  } />
            <Route path="login" element={<Login />} />
            <Route path="signUp" element={<Register />} />
            <Route path="myCart" element={<MyCart />} />
            <Route path="profil" element={<Profil />} />
            <Route path="commands_list" element={<CommandsList />} />
            <Route path="commands_list/:commandId" element={<CommandDetails />} />
            
           
            
            
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
