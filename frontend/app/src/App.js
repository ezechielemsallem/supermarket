import React, { useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MyCart } from './features/cart/Cart';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addCategorieAsync } from './features/categories/categoriesSlice'
import { getCategoriesAsync } from './features/categories/categoriesSlice'
import { loginAsync, selectUserName, selectLogged, selectEmail, logout, selectIsAdmin, signUpAsync, selectAddress} from './features/login/loginSlice';
import { getProfilAsync } from './features/profils/profilsSlice';
import { MY_SERVER } from './app/globe'


function App() {
  
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);
  const handleShowCart = () => setShowCart(true);
  const logged = useSelector(selectLogged);
  const admin = useSelector(selectIsAdmin);
  const dispatch = useDispatch();
  const [showModalCategorie, setShowModalCategorie] = useState(false);
  const handleCloseModalCategorie = () => setShowModalCategorie(false);
  const handleShowModalCategorie = () => setShowModalCategorie(true);
  const [name, setname] = useState("")
  
  


  
  useEffect(() => {
    dispatch(getCategoriesAsync())
  }, [])


  const [showModalLogin, setShowModalLogin] = useState(false);
  const handleCloseModalLogin = () => setShowModalLogin(false);
  const handleShowModalLogin = () => setShowModalLogin(true);
  const [username, setuser] = useState("")
  const [password, setpwd] = useState("")


  const [showModalRegister, setShowModalRegister] = useState(false);
  const handleCloseModalRegister = () => setShowModalRegister(false);
  const handleShowModalRegister = () => setShowModalRegister(true);
  const [userEmail, setuserEmail] = useState("")
  const [address, setaddress] = useState("")
  
  
  const [showModalMyProfil, setShowModalMyProfil] = useState(false);
  const handleCloseModalMyProfil = () => setShowModalMyProfil(false);
  const handleShowModalMyProfil = () => setShowModalMyProfil(true);
  const addressProfil = useSelector(selectAddress);
  const usernameProfil = useSelector(selectUserName); 
  const emailProfil = useSelector(selectEmail)
  useEffect(() => {
    if (logged) {dispatch(getProfilAsync()) }
}, [logged]) 


  
  return (
    <div >
      <Navbar bg="light" expand="lg" >

        <Navbar.Brand ><Link to='/'>My Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!logged ? <Nav.Link  onClick={handleShowModalLogin} >Login</Nav.Link> : ""}
            {!logged ? <Nav.Link onClick={handleShowModalRegister}>Sign Up </Nav.Link> : ""}
            <Nav.Link  ><div onClick={handleShowCart}>My Cart</div>
              <Offcanvas show={showCart} onHide={handleCloseCart} style={{ width:"40%"}}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title style={{ fontSize: "300%" }}>My Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <MyCart></MyCart>
                </Offcanvas.Body>
              </Offcanvas>
            </Nav.Link>

            {logged ? <NavDropdown title="My Count" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleShowModalMyProfil} >My Profil</NavDropdown.Item>
              <NavDropdown.Item > <Link to='/commands_list'> My Commands </Link></NavDropdown.Item>
              <NavDropdown.Item onClick={() => dispatch(logout())}>Logout</NavDropdown.Item>
            </NavDropdown> : ""}

            {admin && logged ? <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item  onClick={handleShowModalCategorie} > Add Categories </NavDropdown.Item>

              <NavDropdown.Item href={MY_SERVER + '/admin/products/products/ '}  >Add Product</NavDropdown.Item>
              
            </NavDropdown> : ""}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Modal  show={showModalMyProfil} onHide={handleCloseModalMyProfil}>
        <Modal.Header closeButton>
          <Modal.Title>MyProfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control value={usernameProfil} placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control value={addressProfil} placeholder="Address" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control value={emailProfil} placeholder="Email" />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalMyProfil}>
            Close
          </Button>
          <Button onClick={() => {
            dispatch(signUpAsync({ username, password, address, userEmail}))
            handleCloseModalMyProfil()
          }} variant="primary" >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      
      <Modal show={showModalRegister} onHide={handleCloseModalRegister}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control onChange={(e) => setuser(e.target.value)} placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' onChange={(e) => setpwd(e.target.value)} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control onChange={(e) => setaddress(e.target.value)} placeholder="Address" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type='email' onChange={(e) => setuserEmail(e.target.value)} placeholder="Email" />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalRegister}>
            Close
          </Button>
          <Button onClick={() => {
            dispatch(signUpAsync({ username, password, address, userEmail}))
            handleCloseModalRegister()
          }} variant="primary" >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalLogin} onHide={handleCloseModalLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>User Name</Form.Label>
              <Form.Control onChange={(e) => setuser(e.target.value)} placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' onChange={(e) => setpwd(e.target.value)} placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalLogin}>
            Close
          </Button>
          <Button onClick={() => {
            dispatch(loginAsync({ username, password }));
            handleCloseModalLogin()
          }} variant="primary" >
            Login
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModalCategorie} onHide={handleCloseModalCategorie}>
        <Modal.Header closeButton>
          <Modal.Title>Add new categorie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control onChange={(e) => setname(e.target.value)} placeholder="categorie name" />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalCategorie}>
            Close
          </Button>
          <Button onClick={() => {
            dispatch(addCategorieAsync({ name }));
            handleCloseModalCategorie()
          }} variant="primary" >
            Save
          </Button>
        </Modal.Footer>
      </Modal>

     


      <Outlet />

    </div>
  );
}

export default App;
