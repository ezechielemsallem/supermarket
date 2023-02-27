import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories, getCategoriesAsync, addCategorieAsync } from './categoriesSlice';
import { getProductsOfCategorieAsync, getProdsAsync } from '../products/productsSlice'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';


export const Categories = () => {
    const categories = useSelector(selectCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoriesAsync())
    }, [])




    return (
      
        <div>
            <Navbar expand={false} className="mb-3">
                <Container fluid>
                    <Navbar.Brand href="#"></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} >
                        Categories
                    </Navbar.Toggle >
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${false}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                                Categories
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link onClick={() => dispatch(getProdsAsync())}>All</Nav.Link>
                                {categories.map((categorie) => (
                                    <Nav.Link key={categorie.id} onClick={() => dispatch(getProductsOfCategorieAsync(categorie.id))}>{categorie.name}</Nav.Link >
                                ))}
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    );
}
