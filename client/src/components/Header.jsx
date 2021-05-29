
import {LinkContainer} from 'react-router-bootstrap'
import {Container, Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userAction'


 const Header = () => {
   const useLogin = useSelector(state => state.useLogin)
   const {userInfo } = userLogin
   const dispatch = useDispatch()
  
   const logoutHandler = () => {
      dispatch(logout())
   }

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

              {userInfo ? ( <NavDropdown title={userInfo.name}>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item  onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>

) :  <LinkContainer to='/login'> <Nav.Link> <i className="fas fa-user"></i>Sign In</Nav.Link>  </LinkContainer> } 
              
                
            </Nav>
            
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
export default Header