import React, { useState } from 'react';
import {  useDispatch } from 'react-redux';
import {  signUpAsync } from './loginSlice';


export const Register = () => {
   
    const dispatch = useDispatch();
    const [username, setuser] = useState("")
    const [password, setpwd] = useState("")
    const [userEmail, setuserEmail] = useState("")
    const [address, setaddress] = useState("")
    const [image, setimage] = useState("")
    console.log(image)
    return (
        <div>

            
                
                    UserName:<input onChange={(e) => setuser(e.target.value)} /><br />
                    Pwd:<input onChange={(e) => setpwd(e.target.value)} /><br />
                    address:<input onChange={(e) => setaddress(e.target.value)} /><br />
                    userEmail:<input onChange={(e) => setuserEmail(e.target.value)} /><br />
                    image:<input type="file" onChange={(e) => setimage(e.target.value)} /><br />

                    <button  onClick={() => dispatch(signUpAsync({ username, password, address, userEmail , image}))}>Create</button>
            
        </div>
    );
}
