import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addtoCart } from '../../../redux/action/addtocart.action';
import { ThemeContext } from '../../../Context/ThameContext';

function Medicinedata() {
    const theme = useContext(ThemeContext)
    const dispatch = useDispatch()
    const { id } = useParams()
    const MedData = useSelector(state => state.fmedicine)
    console.log(MedData.fMdata,"mmmmmmmdattatatat");
    let mdata = MedData.fMdata.filter((v) => v.id === id)
    console.log(mdata, id,'mmm');

    const handleCart = (id) => {
        dispatch(addtoCart(id))
        console.log("handleCart", id);

    }

    return (
        <>
            <div>

                <section class={`h-100 h-custom ${theme.theme}`} style={{ backgroundColor: "#eee" }}>
                    <div className={`container h-100 py-5 ${theme.theme}`}>
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col">
                                <div class="card shopping-cart" style={{ borderRadius: '15px' }}>
                                    <div className={`card-body text-black ${theme.theme}`}>

                                        <div className="row">
                                            <div className={`col-lg-6 px-5 py-4 ${theme.theme}`}>

                                                <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your Medicine</h3>

                                                <div className="d-flex align-items-center mb-5">
                                                    <div className="flex-shrink-0">
                                                        <img src="https://media.istockphoto.com/id/1015072450/photo/tablet-of-pills-and-syrup-medicine.jpg?s=612x612&w=0&k=20&c=r-C4g-1mXs4H8gNMH8NWUzAfALMR2NIYWEE--rqJFNs="
                                                            class="img-fluid" style={{ width: "180px", marginRight: '20px' }} alt="Generic placeholder image" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-3">
                                                        {/* <a href="#!" className="float-end text-black"><i class="fas fa-times"></i></a> */}
                                                        <h5 className="text-primary">{mdata[0].name}</h5>
                                                        <h6 class="htmlForm-label">{mdata[0].expiry}</h6>
                                                        <div className="d-flex align-items-center">
                                                            <p class="htmlForm-label" >{mdata[0].price}</p>

                                                            {/* <div className="def-number-input number-input safari_only">
                                                                <button onClick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                                    className="minus"></button>
                                                                <input class="quantity fw-bold text-black" min="0" name="quantity" value="1"
                                                                    type="number" />
                                                                <button onClick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                                    className="plus"></button>
                                                            </div> */}
                                                        </div>
                                                        <p class="htmlForm-label" >{mdata[0].desc}</p>
                                                    </div>
                                                </div>



                                                <hr class="mb-4" style={{ height: "2px", backgroundColor: "#1266f1", opacity: 1 }} />

                                                {/* <div className="d-flex justify-content-between px-x">
                                                    <p className="fw-bold">Discount:</p>
                                                    <p className="fw-bold">95$</p>
                                                </div> */}
                                                <div class={`d-flex justify-content-between p-2 mb-2 ${theme.theme}`} style={{ backgroundColor: "#e1f5fe" }}>
                                                    <h5 className="fw-bold mb-0">Total:</h5>
                                                    <p className="fw-bold mb-0">{mdata[0].price}</p>
                                                </div>
                                                <div style={{ marginTop: '17px' }}>
                                                    <button type="button" className="btn btn-primary btn-block btn-lg" onClick={() => handleCart(mdata[0].id)}>ADD TO CART</button>

                                                </div>

                                            </div>
                                            <div className={`col-lg-6 px-5 py-4 ${theme.theme}`}>

                                                <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>

                                                <form className="mb-5">

                                                    <div className="form-outline mb-5">
                                                        <input type="text" id="typeText" className="form-control form-control-lg" siez="17"

                                                            placeholder="1234 5678 9012 3457" minlength="19" maxLength="19" />
                                                        <label class="htmlForm-label" for="typeText" style={{ marginTop: '10px' }}>Card Number</label>
                                                    </div>

                                                    <div className="form-outline mb-5">
                                                        <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                                            placeholder="abc xyz" />
                                                        <label class="htmlForm-label" for="typeName" style={{ marginTop: '10px' }}>Name on card</label>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-md-6 mb-5">
                                                            <div className="form-outline">
                                                                <input type="text" id="typeExp" class="form-control form-control-lg" placeholder="01/22"
                                                                    size="7" minlength="7" maxLength="7" />
                                                                <label class="htmlForm-label" for="typeExp" style={{ marginTop: '10px' }}>Expiration</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 mb-5">
                                                            <div className="form-outline">
                                                                <input type="password" id="typeText" className="form-control form-control-lg"
                                                                    placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxLength="3" />
                                                                <label class="htmlForm-label" for="typeText" style={{ marginTop: '10px' }}>Cvv</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <button type="button" className="btn btn-primary btn-block btn-lg">Buy now</button>



                                                </form>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    );
}

export default Medicinedata;