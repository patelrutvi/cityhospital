import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

function Header(props) {


    const Button = styled.button`
    color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;

  &:hover{
    background-color: #105b72c2;
  }
  `;

    // A new component based on Button, but with some override styles
    const TomatoButton = styled(Button)`
    background-color: tomato;
    color:white;
    border-radius: 30px;
    padding: 9px 26px;
  `;
    let login = localStorage.getItem("login")
    const handleLogout = () => {
        localStorage.removeItem("login")
    }
    return (

        <div className="main-header">
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope" /> <a href="mailto:contact@example.com">cityhospital@example.com</a>
                        <i className="bi bi-phone" /> +91 9988776655
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="#" className="twitter"><i className="bi bi-twitter" /></a>
                        <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
                    </div>
                </div>
            </div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <div className="logo">
                        <Link to={'/'}>
                            <h1 className="logo me-auto">City</h1><br />
                            <h2 className="logo-tiny-text me-auto">Multispeciality Hospital</h2>
                        </Link>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link className="nav-link scrollto active" to={"/"}>Home</Link></li>
                            <li><Link className="nav-link scrollto" to={'/department'}>Departments</Link></li>
                            <li><Link className="nav-link scrollto" to={'/doctors'}>Doctors</Link></li>
                            <li><Link className="nav-link scrollto" to={'/medicines'}>Medicines</Link></li>
                            <li><Link className="nav-link scrollto " to={'/about'}>About</Link></li>
                            <li><Link className="nav-link scrollto" to={'/contact'}>Contact</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <Link to={'/appiment'} >
                        <TomatoButton >Make anAppointment</TomatoButton>
                    </Link>

                    {
                        login ? <Link to={'/'} onClick={handleLogout}>
                            <TomatoButton >LogOut</TomatoButton>
                        </Link> : <Link to={'/auth'} >
                            <TomatoButton >Login/SignUp</TomatoButton>
                        </Link>
                    }

                </div>
            </header>
        </div>


    );
}

export default Header;