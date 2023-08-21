
// ...........usememo........
// amuk calculation ne memorise karva mate use thy
// ex...couter-factorial

import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementfac, incrementfac } from '../../../redux/slice/counterfacslice';

function CounterFac(props) {
    const dispatch = useDispatch()
    const counterval = useSelector(state => state.counterfact)
    console.log(counterval);

    const [count, setcount] = useState(0)
    const [number, setnumber] = useState(0)
    const handleinc = () => {
        dispatch(incrementfac())

    }
    const handledec = () => {
        dispatch(decrementfac())
    }
    const findFactorial = () => {
        console.log("asd");
        let fact = 1
        for (let i = number; i >= 1; i--) {
            fact = fact * i
        }
        return fact
    }

    const result = useMemo(() => {
        findFactorial()
    }, [number])
    // const result = findFactorial()
    console.log(number);


    return (
        <>
            {/* ........one page manege counter state */}
            <div style={{ marginLeft: '40%' }}>
                <button onClick={() => { setcount(count + 1) }}  >+</button>
                <span>{count}</span>
                <button onClick={() => { setcount(count - 1) }} >-</button>

            </div>
            {/* ..............using slice mange counter */}
            <div style={{ marginLeft: '40%' }}>
                <button onClick={() => handleinc()}  >+</button>
                <span>{counterval.count}</span>
                <button onClick={() => handledec()} >-</button>

            </div>

            <div style={{ marginLeft: '40%', marginTop: '20px' }} >
                <input type='text' onChange={(event) => setnumber(parseInt(event.target.value))} />
                <span style={{ margin: '20px' }}>Factorial is : {result}</span>
            </div>
        </>
    );
}

export default CounterFac;