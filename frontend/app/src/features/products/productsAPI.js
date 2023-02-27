import axios from 'axios';
import {MY_SERVER} from '../../app/globe'



export function getAllProducts() {

  return new Promise((resolve) =>
    axios.get(MY_SERVER+"/products/").then((res) => resolve({ data: res.data }))
  );
}
export function getProduct(id) {

  return new Promise((resolve) =>
    axios.get(MY_SERVER+"/products/" + id).then((res) => resolve({ data: res.data }))
  );
}

export function getProductsOfCategorie(id) {

  return new Promise((resolve) =>
    axios.get(MY_SERVER+"/categories/" + id).then((res) => resolve({ data: res.data }))
  );
}


export const addProduct = (newProd) => {
  
  
  return new Promise((resolve) =>
    axios.post(MY_SERVER+"/products/", newProd).then((res) => resolve(newProd))
  );
};

export const delProduct = (id) => {
  
  return new Promise((resolve) =>
    axios.delete(MY_SERVER+"/products/"+ id).then((res) => resolve(id))
  );
};

export function updProduct(updData) {
 
  return new Promise((resolve) =>
    axios
      .put(MY_SERVER + "/products/" + updData.id, updData)
      .then((res) => resolve({ data: res.data }))
  );
}