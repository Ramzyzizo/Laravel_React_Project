import {Navbar,Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Header(){
    let user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();
    function Logout()
    {
        localStorage.clear();
        navigate('/login');
    }
    return(

        <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="#home">Brand React</Navbar.Brand>
          <Nav className="mr-auto nav_bar_warapper">
              {
                  localStorage.getItem('user-info') ?
                      <>
                          <Link className="mr-3" to="/add">Add Product</Link>
                          <Link className="mr-3" to="/product_list">Product list</Link>
                          <Link className="mr-3" to="/search">Search Product</Link>
                      </>
                      :
                      <>
                          <Link className="mr-3" to="/login">Log in</Link>
                          <Link className="mr-3" to="/register">register</Link>
                      </>
              }
          </Nav>
            {localStorage.getItem('user-info') ?
                <Nav>
                    <NavDropdown title={user && user.name} >
                        <NavDropdown.Item onClick={Logout} >Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null
            }
      </Navbar>
    )
}
export default Header