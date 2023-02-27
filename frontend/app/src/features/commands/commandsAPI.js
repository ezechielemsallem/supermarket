import axios from 'axios';
import {MY_SERVER} from '../../app/globe'


export function getAllCommands() {
  const token = localStorage.getItem('access')

  const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };


    return new Promise((resolve) =>
      axios.get(MY_SERVER+"/commands/commands_list", config).then((res) => resolve({ data: res.data }))
    );
  }


  export function getDetailsCommand(command) {
    const token = localStorage.getItem('access')
  
    const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };
  
  
      return new Promise((resolve) =>
        axios.get(MY_SERVER+`/commands/commands_details/${command}`, config).then((res) => resolve({ data: res.data }))
      );
    }