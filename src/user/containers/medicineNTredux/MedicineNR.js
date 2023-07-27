import React, { useEffect, useState } from 'react';
import MedisineListNR from './MedisineListNR';
import Header from '../../components/Header';

function MedicineNR(props) {

    const [medidata, setmedidata] = useState([])
    const [filterdata, setfilterdata] = useState([])
    // const [cartitems, setcartitems] = useState([])
    
    

    useEffect(() => {
        try {
            fetch("http://localhost:3004/medicines")
                .then((response) => response.json())
                .then((data) => setmedidata(data))
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error);
        }


    }, [])

    const handlechange = (val) => {
        console.log(val, "val");

        // let medicine = JSON.parse(localStorage.getItem('medicine'));

        let fdata = medidata.filter((v) =>
            v.name.toLowerCase().includes(val.toLowerCase())
            || v.price.toString().includes(val)
            || v.expiry.toString().includes(val)
            || v.desc.toLowerCase().includes(val.toLowerCase())
        )

        console.log(fdata);
        setfilterdata(fdata)

    }
    let arr = []; 
   
    const handlecart = (id) => {
        console.log(id);

        // let items = { pid: id, qyt: 1 }
        // arr.push(items)
        // console.log(arr, "nr arr");
        // // setcartitems(items)
        // // console.log(cartitems,"cartitems") 
        // if(arr){
        //     let index = arr.findIndex((v) => v.pid  === id)
        //     // console.log("index",index);
        //     console.log( arr[index].qyt,"index qyt");
        //     arr[index].qyt++
        // }else{
        //     arr.push(id)
        // }

       

        // let cartcount1 = 0;
        // if (arr) {
        //     cartcount1 = arr.reduce((acc, v, i) => acc + v.qyt, 0)
        // }
        // console.log(cartcount1);

    }



    return (
        <>
            <div className="section-title">
                <h2>Medicine</h2>
                <p>
                    Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                    aliquam eget nibh eu euismod. Donec dapibus blandit quam
                    volutpat sollicitudin. Aenean ac turpis ante. Mauris velit
                    sapien, aliquet aliquet rhoncus quis, luctus at neque. Mauris
                    sit amet massa sed orci vehicula facilisis.
                </p>
            </div>

            <div class="input-group" style={{ marginLeft: '90px' }}>
                <div class="form-outline" style={{ width: '80%', margin: '30px', marginRight: '0px' }}>
                    <input id="search-input"
                        type="search"
                        class="form-control"
                        onChange={(e) => handlechange(e.target.value)} />

                </div>
                <button id="search-button" type="button" class="btn btn-primary" style={{ margin: '30px 0px' }}>
                    <i class="fas fa-search"></i>
                </button>
            </div>

            <div className='container'>
                <div className='row gap-3' >
                    <MedisineListNR mdata={filterdata.length > 0 ? filterdata : medidata} onhandlecart={handlecart} />
                    
                </div>

            </div>
        </>
    );
}

export default MedicineNR;