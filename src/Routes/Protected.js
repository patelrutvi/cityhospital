import React, { useEffect } from 'react';
import { Navigate, Outlet, redirect, useNavigate } from 'react-router-dom';

function Protected(props) {
    const navigate = useNavigate();
    let login = localStorage.getItem("login")
    return (
        login ? <Outlet /> : <Navigate to={'/auth'} replace />
           
    );
}

export default Protected;

