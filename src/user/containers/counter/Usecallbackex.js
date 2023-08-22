import React from 'react';

function Usecallbackex(props) {
    
    const handleTheme = () => {
        console.log("theme");
    }

    const handleList = (data) => {
        console.log(data,'list');
    }

    return (
        <>
        <div style={{marginLeft:'30%',marginTop:'20px'}}>
            <button onClick={() => handleTheme()}>Theme</button>
        </div>
        <div style={{marginLeft:'30%',marginTop:'20px'}}>
            <input type='text' onChange={(e) => handleList(e.target.value)} />
        </div>
        </>
    );
}

export default Usecallbackex;
