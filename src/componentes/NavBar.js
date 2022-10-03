import {Container,Nav, Navbar} from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget  from './CartWidget/CartWidget';
  
function NavBar() {
  return (
    <>
  
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
          
          <img
              alt="logo"
              src= "./APPLE_icon.svg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            
            </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={Link} to="/categoria/iphone">iPhone</Nav.Link>
            <Nav.Link as={Link} to="/categoria/accesorios">Accesorios</Nav.Link>
            <Nav.Link as={Link} to="/servicio">Servicio Técnico</Nav.Link>
            <Nav.Link as={Link} to="/cart"><CartWidget/></Nav.Link>
          </Nav>
          
        </Container>
      </Navbar>
      <section>
        <Outlet></Outlet>
      </section>
    </>
  );
}



export default NavBar;