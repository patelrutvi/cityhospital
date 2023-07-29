import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './UI/Button/Button';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        background: '#ff6337'

    },
}));

// const shapeStyles = { bgcolor: 'primary.main', width: 20, height: 20 };
// const shapeCircleStyles = { borderRadius: '50%' };
// const rectangle = <Box component="span" sx={shapeStyles} />;
// const circle = (
//     <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
// );

function Header({ count }) {

    const cartData = useSelector((state) => state.cart)
    const favData = useSelector((state) => state.fav)
    console.log(favData,"favData");

    console.log(cartData, "crd");

    let cartcount = 0;

    if (cartData.items) {
        cartcount = cartData.items.reduce((acc, v, i) => acc + v.qyt, 0)
    }

    let login = localStorage.getItem("login")
    const handleLogout = () => {
        localStorage.removeItem("login")
    }


    let favcount = 0;
    if (favData.myfav) {
        favcount = favData.myfav.reduce((acc, v, i) => acc + v.qyt, 0)
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
                        <div>
                            <Link to={"myfav"}>
                                <Badge color="secondary" badgeContent={favcount} >
                                    <FavoriteIcon />
                                </Badge>
                            </Link>
                        </div>
                        <div>
                            <Link to="/cartnr">
                                <IconButton aria-label="cart" >
                                    <StyledBadge badgeContent={count} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </Link>
                        </div>

                        <div>
                            <Link to="/cart">
                                <IconButton aria-label="cart" >
                                    <StyledBadge badgeContent={cartcount} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </Link>

                        </div>
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
                            <li><Link className="nav-link scrollto" to={'/medicinenr'}>Medicines1</Link></li>
                            <li><Link className="nav-link scrollto " to={'/about'}>About</Link></li>
                            <li><Link className="nav-link scrollto" to={'/contact'}>Contact</Link></li>
                            <li><Link className="nav-link scrollto" to={'/counter'}>Counter</Link></li>

                        </ul>

                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                    <Link to={'/appiment'} >
                        <Button >Make anAppointment</Button>
                    </Link>

                    {
                        login ? <Link to={'/'} onClick={handleLogout}>
                            <Button>LogOut</Button>
                        </Link> : <Link to={'/auth'} >
                            <Button >Login/SignUp</Button>
                        </Link>
                    }

                </div>

            </header>

        </div>

    );
}

export default Header;