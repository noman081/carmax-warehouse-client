import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import MySpinner from '../Spinner/MySpinner';
const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth);
        navigate('/');
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to='/'><img src={logo} alt="" height={70} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className='ms-auto navbar'>
                            <Nav.Link className='header-link' as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link className='header-link' as={Link} to='/blogs'>Blogs</Nav.Link>


                            {
                                user ?
                                    <>
                                        <Nav.Link className='header-link' as={Link} to='/car/add'>Add Car</Nav.Link>
                                        <Nav.Link className='header-link' as={Link} to='/car/manage'>Manage Car</Nav.Link>
                                        <Nav.Link className='header-link' as={Link} to='/myitems'>My Items</Nav.Link>
                                        <p>{user?.displayName}</p>
                                        <button className="btn btn-link" onClick={handleSignOut}>Signout</button>
                                    </>
                                    :
                                    <Nav.Link as={Link} to='/signin'><button className="btn btn-outline-primary">Signin</button></Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;