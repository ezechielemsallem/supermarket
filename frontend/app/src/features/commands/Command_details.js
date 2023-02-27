
import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getDetailsCommandAsync, selectCommandId, selectDetailsCommand} from './commandsSlice'
import {selectLogged} from '../login/loginSlice'
import {  useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';



export const CommandDetails = () => {
    const navigate = useNavigate();
    const logged = useSelector(selectLogged);
    const commands = useSelector(selectCommandId);
    const dispatch = useDispatch();
    const details = useSelector(selectDetailsCommand)

    useEffect(() => {
        if (logged) { dispatch(getDetailsCommandAsync(commands)) }
    }, [])

    

   
    return (
        <div >
            <div style={{fontSize:"250%"}} >
            Command's Details
            </div>
            {logged ? <Table striped bordered hover variant="dark" style={{margin:'2%', width:"96%"}}>
                <thead>
                    <tr>


                        <th >Product Name </th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map((detail, i) =>
                            <tr>
                                <td>{detail.product_name} </td>
                                <td>{detail.amount} </td>
                                <td>{detail.product_price} </td>
                                <td>{detail.price} </td>
                            </tr>
                        )}
                </tbody>
            </Table>: <div>you need to login to see your commands</div>}
       
             
            



        </div>
    );
}
