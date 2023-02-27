import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginAsync, selectUserName, selectLogged, selectEmail, logout } from './loginSlice';


export const Login = () => {
    const userName = useSelector(selectUserName);
    const email = useSelector(selectEmail);

    const logged = useSelector(selectLogged);
    const dispatch = useDispatch();
    const [username, setuser] = useState("")
    const [password, setpwd] = useState("")
    

  
    return (
        <div>

            {logged ? <div>
                userName:{userName}, email:{email}{" "}
                <button onClick={() => dispatch(logout())}>Logout</button>
            </div> :
                <div >
                    UserName:<input onChange={(e) => setuser(e.target.value)} />
                    Pwd:<input onChange={(e) => setpwd(e.target.value)} /><br />
                    <button onClick={() => dispatch(loginAsync({ username, password }))}>login</button>
                </div>}
                
        </div>
    );
}
