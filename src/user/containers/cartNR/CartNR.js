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
        console.log(index);
        cartdata[index].qyt++
       
        localStorage.setItem("cart", JSON.stringify(cartdata))
        setcartdata(cartdata)
        
    }
    const handleDnc = (id) => {
        let index = cartdata.findIndex((v) => v.pid === id)
        console.log(index);
        cartdata[index].qyt--
       
        localStorage.setItem("cart", JSON.stringify(cartdata))
        setcartdata(cartdata)
        
    }

    return (
        <div>
            <section id="cart" >
                <div className='container'>
                    <div className="section-title">
                        <h2>Cart1</h2>
                        {
                            cartmediitem.map((v) => {
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
                                                        <Button  onClick={() => handleDnc(v.pid)}>-</Button>
                                                        <h5 className="fw-normal mb-0">{v.qyt}</h5>
                                                        <Button onClick={() => handleInc(v.pid)}>+</Button>
                                                    </div>
                                                    <div style={{ width: 80 }}>
                                                        <h5 className="mb-0">{v.price}</h5>
                                                    </div>
                                                    <a href="#!" style={{ color: '#cecece' }}><i className="fas fa-trash-alt" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>
                </div>
            </section>
        </div>

    );
}

export default CartNR;