
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectProducts, getProdsAsync, updProductAsync } from './productsSlice';
import { add2cart, selectCart, removeProductInCart } from '../cart/cartSlice';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MY_SERVER } from '../../app/globe'
import { Categories } from '../categories/Categories';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import { selectCategories } from '../categories/categoriesSlice'
import {selectIsAdmin} from '../login/loginSlice'






export const Products = () => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();
    const productsCart = useSelector(selectCart);

    useEffect(() => {
        dispatch(getProdsAsync())
    }, [])

    const [showModalProduct, setShowModalProduct] = useState(false);
    const handleCloseModalProduct = () => setShowModalProduct(false);
    const handleShowModalProduct = () => setShowModalProduct(true);
    const [nameProduct, setnameProduct] = useState("")
    const categories = useSelector(selectCategories);
    const [categorieOfProduct, setCategorieOfProduct] = useState(0)

    const [price, setprice] = useState(0)
    const [image, setimage] = useState("")
    const [amount, setamount] = useState(0)
    
    const admin = useSelector(selectIsAdmin);
    return (
        <div >
            <div style={{fontSize:"250%"}} >
            Products
            </div>
            <Categories  ></Categories>
            <div style={{ display: "flex"}}>
            <Row  md={5} style={{marginTop:"1%", marginRight:"3%", marginLeft:"3%"}} >
                
                {
                    products.map((product, i) =>
                        <Col key={i} style={{ marginTop:"1%"}}  >
                            <Card  style={{height:"100%",width:"100%"}}>
                                <Card.Img style={{height:"40%",width:"40%"}} variant="top" src={MY_SERVER + product.image} />
                                <Card.Body>
                                    <Card.Title>{product.nameProduct}</Card.Title>
                                    <Card.Text>
                                    {product.price} 
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => dispatch(add2cart(product))}>Buy</Button>
                                    <Button variant="primary" onClick={() => dispatch(removeProductInCart(product))}>remove  in Cart</Button>
                                    {admin ? <Button variant="primary" href={MY_SERVER + `/admin/products/products/${product.id}/change/`}>Modify</Button>: ""}
                                </Card.Body>
                            </Card>
                            <Modal show={showModalProduct} onHide={handleCloseModalProduct}>
                                <Modal.Header closeButton>
                                    <Modal.Title>UPD new product</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control value={product.nameProduct} onChange={(e) => setnameProduct(e.target.value)} placeholder="product name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Categorie</Form.Label>
                                            <Form.Select id="categorie" onChange={(e) => setCategorieOfProduct(e.target.value)} onClick={(e) => setCategorieOfProduct(e.target.value)}>

                                                {categories.map((categorie, i) =>
                                                    <option value={categorie.id}>{categorie.name}</option>)}
                                            </Form.Select>
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control  onChange={(e) => setprice(e.target.value)} placeholder="Price" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Amount</Form.Label>
                                            <Form.Control onChange={(e) => setamount(e.target.value)} placeholder="categorie name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Image</Form.Label>
                                            <input type='file' onChange={(e) => setimage(e.target.value)} placeholder="categorie name" />
                                        </Form.Group>

                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseModalProduct}>
                                        Close
                                    </Button>
                                    <Button onClick={() => {
                                        dispatch(updProductAsync({ nameProduct, categorieOfProduct, price, image, amount }));
                                        handleCloseModalProduct()
                                    }} variant="primary" >
                                        Save
                                    </Button>
                                </Modal.Footer>
                            </Modal>



                        </Col>
                    )}

            </Row>
            </div>




        </div>
    );
}
