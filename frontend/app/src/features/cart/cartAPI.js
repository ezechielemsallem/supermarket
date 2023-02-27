import { MY_SERVER } from '../../app/globe'
import axios from 'axios'

export function AddCommandDetails(data, config) {
    return new Promise((resolve) =>
        axios.post(MY_SERVER + "/commands/commands_details", data,config ).then(res => resolve({ data: res.data }))
    )
}
