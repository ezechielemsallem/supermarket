import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfilAsync, selectAddressUser, selectImageUser } from './profilsSlice';
import {selectLogged, logout, selectUserName} from '../login/loginSlice'
import { MY_SERVER } from '../../app/globe'



export const  Profil=()=> {
    const logged = useSelector(selectLogged);
    const image = useSelector(selectImageUser);
    const address = useSelector(selectAddressUser);
    const username = useSelector(selectUserName); 
    const dispatch = useDispatch();
    console.log(address)

    
     useEffect(() => {
         if (logged) {dispatch(getProfilAsync()) }
    }, [logged]) 
    
    return (
        <div >
            {logged ? <div>
                Profil<br/>
            {username}<br/>
            {address}<br/>
            <img src={MY_SERVER + image}/>
            </div> : 
            
            <div>
               You need to logg
            </div>
            
            }
            
            

        </div>
    );
}
