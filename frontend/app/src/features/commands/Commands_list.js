
import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAllCommandsAsync, selectCommands, getCommandId } from './commandsSlice'
import { selectLogged} from '../login/loginSlice'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';



export const CommandsList = () => {
    const commands = useSelector(selectCommands);
    const logged = useSelector(selectLogged);
    const dispatch = useDispatch();
    useEffect(() => {
        if (logged) { dispatch(getAllCommandsAsync()) }
    }, [logged])

    return (
        <div >
            <div style={{fontSize:"250%"}} >
            My Commands
            </div>
            {logged ? <Table striped bordered hover variant="dark" style={{margin:'2%', width:"96%"}}>
                <thead>
                    <tr>
                        <th >Command</th>
                        <th>Address</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        commands.map((command, i) =>
                            <tr>
                                <td>{command.id} </td>
                                <td>{command.address}</td>
                                <td>{command.price}</td>
                                <td><Link
                                    key={command.id}
                                    to={`/commands_list/${command.id}`}
                                    onClick={() => dispatch(getCommandId(command.id))}
                                > <Button variant="info" >details</Button>
                                </Link>
                                </td>
                            </tr>
                        )}
                    
                    
                </tbody>
            </Table>: <div>you need to login to see your commands</div>}
           
        </div>
    );
}
