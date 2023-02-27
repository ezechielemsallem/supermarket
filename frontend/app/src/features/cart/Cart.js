import React, { useState} from 'react';
import { selectCart, selectTotalProduct } from './cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { AddCommandDetailsAsync, substractProduct, addOneProduct } from './cartSlice'
import { selectLogged, selectId, selectUserName, selectAddress } from '../login/loginSlice'
import { MY_SERVER } from '../../app/globe'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


export const MyCart = () => {
    const productsCart = useSelector(selectCart);
    const total = useSelector(selectTotalProduct);
    const dispatch = useDispatch();
    const logged = useSelector(selectLogged);
    const id = useSelector(selectId);
    const userName = useSelector(selectUserName);
    const address = useSelector(selectAddress);
    const [commands_list, setcommands_list] = useState({ "address": address, "price": total })
    const [products, setproducts] = useState(productsCart)


    return (
        <div >
            <div>
                    
                    {total != 0 ? <div style={{ fontSize: "250%" }}>
                    total : {total}
                    </div > : <div>
                    Buy one product to see your cart
                </div>}
                    {!logged ? <div >
                        want to buy ? log in !
                    </div >: 
                    <Button variant="info" onClick={() => dispatch(AddCommandDetailsAsync({ commands_list, products }))}>buy</Button>
                    }
                </div >



    

            {total != 0 ? <Table striped bordered hover style={{ margin: '2%', width: "96%" }}>
                <thead>
                    <tr>


                        <th >Product</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Total</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productsCart.map((product, i) =>
                            <tr>


                                <td>
                                    <img style={{ height: "30%", width: "30%", marginRight: "3%" }} variant="top" src={MY_SERVER + product.product.image} />{product.product.nameProduct}
                                </td>
                                <td>{product.product.price} </td>
                                <td>{product.amount}  </td>
                                <td>{product.price} </td>
                                <td style={{ width: "20%"}} >
                                    <Button variant="danger" style={{ marginRight: "5%"}} onClick={() => dispatch(substractProduct(product.product))}> - </Button>
                                    <Button variant="success" onClick={() => dispatch(addOneProduct(product.product))}> + </Button></td>


                            </tr>

                        )}

                </tbody>
            </Table> : ""}




        </div>

    );
}
