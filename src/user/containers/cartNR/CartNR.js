import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

function CartNR(props) {
    const [medidata, setmedidata] = useState([])
    const [cartdata, setcartdata] = useState([])
    useEffect(() => {
        try {
            fetch("http://localhost:3004/medicines")
                .then((response) => response.json())
                .then((data) => setmedidata(data))
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error);
        }

        let cartitem = JSON.parse(localStorage.getItem("cart"))
        setcartdata(cartitem)
    }, [])

    // console.log(medidata, "medidata");
    // console.log(cartdata, "cartdata");
    let cartmediitem = cartdata.map((v) => {
        let medid = medidata.find((m) => m.id === v.pid)
        console.log(medid, "medid");
        let medicart = { ...medid, ...v }
        return medicart
    })
    console.log(cartmediitem, "cartmediitem");

    const handleInc = (id) => {
        let index = cartdata.findIndex((v) => v.pid === id)
        cartdata[index].qyt++
        // console.log(index);
        localStorage.setItem("cart", JSON.stringify(cartdata))

    }
    const handleDnc = (id) => {
        let index = cartdata.findIndex((v) => v.pid === id)
        
        if (cartdata[index].qyt > 1) {
            console.log("hhjbv");
            cartdata[index].qyt--
        }
       
        // console.log(index);
        localStorage.setItem("cart", JSON.stringify(cartdata))

    }

    const handleDelete = (id) => {
        let deletecart = cartdata.filter((v) => v.pid !== id)
        console.log(deletecart, "deletecart");
        setcartdata(deletecart)
        localStorage.setItem("cart", JSON.stringify(deletecart))
    }
    let pr = 0;
    return (
        <div>
            <section id="cart" >
                <div className='container'>
                    <div className="section-title">
                        <h2>Cart1</h2>
                        {
                            cartmediitem.map((v) => {
                                let cp = v.price * v.qyt
                              pr = cartmediitem.reduce((acc, a, i) => acc + a.price * a.qyt, 0)
                                console.log(pr);
                                return (
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex flex-row align-items-center">
                                                    <div className="ms-3">
                                                        <h5>{v.name}</h5>
                                                        <p className="small mb-0">{v.desc}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center">
                                                    <div style={{ width: 50 }}>
                                                        <Button onClick={() => handleDnc(v.pid)}>-</Button>
                                                        <h5 className="fw-normal mb-0">{v.qyt}</h5>
                                                        <Button onClick={() => handleInc(v.pid)}>+</Button>
                                                    </div>
                                                    <div style={{ width: 80 }}>
                                                        <h5 className="mb-0">{cp}</h5>
                                                    </div>
                                                    <a href="#!" style={{ color: '#cecece' }} onClick={() => handleDelete(v.pid)}><i className="fas fa-trash-alt" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
        </div>

    );
}

export default CartNR;