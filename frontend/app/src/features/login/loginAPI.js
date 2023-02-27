import { MY_SERVER } from '../../app/globe'
import axios from 'axios'

export function login(cred) {
    return new Promise((resolve) =>
        axios.post(MY_SERVER + "/login/", cred).then(res => resolve({ data: res.data }))
    )
}
export function signUp(data) {
    return new Promise((resolve) =>
        axios.post(MY_SERVER + "/login/register", data).then(res => resolve({ data: res.data }))
    )
}
