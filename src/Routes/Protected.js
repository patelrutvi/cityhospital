import React, { useEffect } from 'react';
import { Navigate, Outlet, redirect, useNavigate } from 'react-router-dom';

function Protected(props) {
    let login = localStorage.getItem("login")
    console.log(login,"login protected");
    return (
        login ? <Outlet /> : <Navigate to={'/auth'} replace />
           
    );
}

export default Protected;

