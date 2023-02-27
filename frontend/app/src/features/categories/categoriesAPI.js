import axios from 'axios';
import {MY_SERVER} from '../../app/globe'

export function getAllCategories() {

    return new Promise((resolve) =>
      axios.get(MY_SERVER+"/categories/").then((res) => resolve({ data: res.data }))
    );
  }

  export function addCategorie(data) {

    return new Promise((resolve) =>
      axios.post(MY_SERVER+"/categories/",data).then((res) => resolve({ data: res.data }))
    );
  }