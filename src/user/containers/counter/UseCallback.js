import React, { useCallback } from 'react';
import { useState } from 'react';
import CallBackListData from './CallBackListData';

function UseCallback(props) {
    const [theme, settheme] = useState(false)
    const [number, setnumber] = useState(1)

    const themestyle = {
        backgroundColor: theme ? '#000' : '#fff',
        color: theme ? '#fff' : '#000'
    }

    const getitems = useCallback((n) => {
        return [number, number + n, number + n + 1]
    }, [number])
    return (

        <div style={themestyle}>
            <div style={{margin:'50px'}} >
                <h3>Usecallback Example</h3>
                <button onClick={() => settheme(!theme)}>Theme</button>
                <input type='text' onChange={(event) => setnumber(parseInt(event.target.value))} />

                <CallBackListData items={getitems} />
            </div>

        </div>

    );
}

export default UseCallback;