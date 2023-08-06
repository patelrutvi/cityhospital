import React from 'react';
import Button from '../../components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../../slice/counterslice';
// import { decrement, increment } from '../../../redux/action/counter.action';

function Counter(props) {

    const dispatch = useDispatch()
    const counterval = useSelector(state => state.counter)
    console.log(counterval);
    const handleinc = () => {
        dispatch(increment())
    }
    const handledec = () => {
        dispatch(decrement())
    }
    return (
        <div >
            <button onClick={() => handleinc()}  >+</button>
            <span>{counterval.count}</span>
            <button onClick={() => handledec()} >-</button>

           
            {/* <Button onClick={() => handleinc()}  >+</Button>
            <span>{counterval.count}</span>
            <Button onClick={() => handledec()} >-</Button> */}
        </div>
    );
}

export default Counter;