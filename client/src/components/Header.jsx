
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Navbar, Nav} from 'react-bootstrap';

 const Header = () => {
    return (
        <Navbar bg="light" expand="lg" variant='light' collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
            <Navbar.Brand>E-Shop</Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >
              <LinkContainer to='/cart'> <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link> </LinkContainer>
              <LinkContainer to='/login'> <Nav.Link> <i className="fas fa-user"></i>Sign In</Nav.Link>  </LinkContainer>
                
            </Nav>
            
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Header