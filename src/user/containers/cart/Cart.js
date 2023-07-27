import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrQty, deleteCArtdata, incQty } from '../../../redux/action/addtocart.action';

function Cart(props) {
    const medicinedata = useSelector((state) => state.medicine)
    const cartdata = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    let cartmediitem = cartdata.items.map((v) => {
        let medidataf = medicinedata.mediData.find((m) => m.id === v.pid)
        let mdatacart = { ...medidataf, ...v }
        return mdatacart;

    })
    console.log(cartmediitem);

    console.log(medicinedata, cartdata);


    const handleIncr = (id) => {
        dispatch(incQty(id))
    }
    const handleDecr = (id) => {
        dispatch(decrQty(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteCArtdata(id))
    }
    let pr = 0;

    return (

        <section id="cart" >
            <div className='container'>
                <div className="section-title">
                    <h2>Cart</h2>

                    {
                        cartmediitem.map((c, i) => {
                            let cp = c.price * c.qyt
                            pr = cartmediitem.reduce((acc, a, i) => acc + a.price * a.qyt, 0)
                            console.log(pr);

                            return (
                                <>
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex flex-row align-items-center">

                                                    <div className="ms-3">
                                                        <h5>{c.name}</h5>
                                                        <p className="small mb-0">{c.desc.substring(0, 30)}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center">
                                                    <div style={{ width: 50 }}>
                                                        <Button onClick={() => handleDecr(c.pid)}>-</Button>
                                                        <h5 className="fw-normal mb-0">{c.qyt}</h5>
                                                        <Button onClick={() => handleIncr(c.pid)}>+</Button>
                                                    </div>
                                                    <div style={{ width: 80 }}>

                                                        <h5 className="mb-0">{cp}</h5>

                                                    </div>
                                                    {/* <div style={{ width: 130 }}>

                                                        <h5 className="mb-0">{c.expiry}</h5>
                                                    </div> */}
                                                    <a href="#!" style={{ color: '#cecece' }} onClick={() => handleDelete(c.pid)}><i className="fas fa-trash-alt" /></a>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                </>

                            )
                        })

                    }

                    <div className="card mb-3">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">

                                    <div className="ms-3">
                                        <h5>Total Amount</h5>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div style={{ width: 50 }}>
                                    </div>
                                    <div style={{ width: 80 }}>

                                        <h5 className="mb-0">{pr}</h5>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>



            </div>
        </section>

    );
}

export default Cart;