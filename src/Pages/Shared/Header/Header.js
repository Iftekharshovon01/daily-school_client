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
    const [btn,setBtn] =useState(true);
    const cngBtn=(e)=>{
        setBtn(!btn);

    }

    const {user} = useContext(AuthContext);
    console.log(user);

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
                            {btn?
                            <Button variant="primary" onClick={cngBtn}>Dark Mode</Button>:
                            <Button variant="success" onClick={cngBtn}>Light Mode</Button>
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
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};

export default Header;