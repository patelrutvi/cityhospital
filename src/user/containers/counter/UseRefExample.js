import React, { useEffect, useRef, useState } from 'react';

function UseRefExample(props) {
    const [name, setname] = useState('')
    const ref = useRef(0)

    const nameref = useRef(0)

    useEffect(() => {
        ref.current = ref.current + 1

        console.log(nameref.current.value);
    }, [name])

    const handleFocus = (refI) => {
        refI.current.style.backgroundColor = 'green' ;

    }
    return (
        <div style={{ margin: '30px' }}>
            <h3>UseRef Example</h3>
            <input
                ref={nameref}
                type='text'
                onFocus={() => handleFocus(nameref)}
                onChange={(event) => setname(event.target.value)} />
            <p>Name:{name}</p>
            <p>no of time rendring:{ref.current}</p>
        </div>
    );
}

export default UseRefExample;