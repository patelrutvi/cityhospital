import React, { useEffect, useState } from 'react';

function CallBackListData({items}) {

    const [data,setdata]= useState([])

    useEffect(() => {
        console.log("chiled");
        setdata(items(5))
    },[items])
    return (
        <div>
            <ul>
                {
                    data.map((d,i) => {
                        return (
                            <li key={i}>{d}</li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default CallBackListData;