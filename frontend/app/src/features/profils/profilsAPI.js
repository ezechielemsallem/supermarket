import { MY_SERVER } from '../../app/globe'
import axios from 'axios'

export function getProfil() {
    const token = localStorage.getItem('access')



    const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };


    return new Promise((resolve) =>
        axios.get(MY_SERVER + "/profil/", config).then(res => resolve({ data: res.data }))
    )
}
