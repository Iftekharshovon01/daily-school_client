import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Header = () => {


    const {user,logOut} = useContext(AuthContext);
    console.log(user);
    const [mode,setMode] =useState(true);
    const chngMode=(e)=>{
        setMode(!mode);

    }

    // const [btn,setbtn] =useState(true);
    // const cngbtn=(e)=>{
    //     setbtn(!btn);

    // }


    return (

            <Navbar collapseOnSelect className='mb-5' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><Link to='/'>Daily School</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link ><Link to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link ><Link >
                            {mode?
                            <Button variant="primary" onClick={chngMode}>Dark Mode</Button>:
                            <Button variant="success" onClick={chngMode}>Light Mode</Button>
                            }
                        </Link></Nav.Link>


                    </Nav>
                    <Nav>
                        <Nav.Link className='text-black'>{user?.displayName}</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                        {user?.photoURL?
                        <Image style={{heught:'40px'}} roundedCircle src={user.photoURL}></Image>
                    : <FaUserAlt/>}
                        </Nav.Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                    <Nav>
                    <Nav.Link ><Link >
                            {user?
                            <Button variant="success"  onClick={logOut}>Logout</Button>
                            :
                            <>
                            <Button variant="secondary" ><Link to='/login'>Login</Link></Button>
                            <Button variant="secondary" ><Link to='/register'>Register</Link></Button>
                            </>
                            }
                        </Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;