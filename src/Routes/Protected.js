import React, { useEffect } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

function Protected({ Component }) {
    const navigate = useNavigate();
    useEffect(() => {
        let login = JSON.parse(localStorage.getItem("login"))
        console.log(login);
        if (!login) {
            navigate('/auth')
        }

    }, [])
    return (
        <div>
            <Component />
        </div>
    );
}

export default Protected;

