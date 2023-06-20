import React from 'react';
import { useParams } from 'react-router-dom';

function Doctor(props) {
    const { id } = useParams()

    let getdata = JSON.parse(localStorage.getItem("drdata"))
    console.log(getdata, "get");

    
    let dataidd = []

    getdata.map((v) => {
        dataidd.push(v.id)

    })
    console.log(dataidd, 'arr idd');
   
    let data = getdata.filter((f) => f.id === dataidd)
 
    console.log(data, "data get filter");

    return (
        <div>
            <h1>hellow  {id}</h1>
        </div>
    );
}

export default Doctor;