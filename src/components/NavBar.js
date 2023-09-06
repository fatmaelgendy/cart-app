import { Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavBar(){
  const cart=useSelector(state=>state.Cart);
  console.log("cart");
  console.log(cart);
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary fixed-top ">
      <Container>
        <Link to="/" className="nav-brand" style={{textDecoration: 'none'}}>Cart-app</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " >
           
            <Link to="/" className="nav-link" >Home</Link>
            <Link to="/cart" className="btn btn-outline-dark rounded-pill " >
            
            Cart-<span class="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</span></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}
export default NavBar;