import React from 'react';
import { useParams } from 'react-router-dom';

function Doctor(props) {
    const {id} = useParams()

    return (
        <div>
            <h1>hellow  {id}</h1>
        </div>
    );
}

export default Doctor;