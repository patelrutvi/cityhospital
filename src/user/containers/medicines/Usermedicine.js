import React, { useEffect } from 'react';
import MedicineList from './MedicineList';
import { useState } from 'react';
import { Row } from 'reactstrap';


function Usermedicine(props) {

    const [data, setdata] = useState([])
    const [filterdata, setfilterdata] = useState([])

    useEffect(() => {
        let medicine = JSON.parse(localStorage.getItem('medicine'));
        console.log(medicine, "getmedicine");
        if (medicine) {
            setdata(medicine)
        }

    }, [])


    const handlechange = (val) => {
        console.log(val);

        let medicine = JSON.parse(localStorage.getItem('medicine'));

        let fdata = medicine.filter((v) =>
            v.mname.toLowerCase().includes(val.toLowerCase())
            || v.mprice.toString().includes(val)
            || v.expdate.toString().includes(val)
            || v.mdisc.toLowerCase().includes(val.toLowerCase())
        )

        console.log(fdata);
        setfilterdata(fdata)

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

            <div class="input-group">
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
                    <MedicineList mdata={filterdata.length > 0 ? filterdata : data} />
                </div>

            </div>
        </>

    );
}

export default Usermedicine;


