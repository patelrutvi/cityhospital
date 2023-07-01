

import { TextField } from '@mui/material';
import { renderActionsCell } from '@mui/x-data-grid';
import * as React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card, CardText, CardTitle, Col, Row } from 'reactstrap';


let medicine = JSON.parse(localStorage.getItem('medicine'));
console.log(medicine, "getmedicine");

function Usermedicine(props) {

    const [mdata, setmdata] = useState(medicine)
    console.log(mdata, "mdata");

    useEffect(() => {
        setmdata(mdata)
    }, []);


    const handlekey = (mn) => {
        console.log("keyy", mdata, mn);
        // let fdata = mdata.filter((f) => f.mname == mn)
        // console.log(fdata, "fdata");

        for (let i = 0; i < mdata[0].length; i++) {
            console.log(mn[0].length);
        }


    }


    return (

        <div>
            <div class="input-group">
                <div class="form-outline" style={{ width: '80%', margin: '30px', marginRight: '0px' }}>
                    <input id="search-input"
                        type="search"
                        class="form-control"
                        onClick={handlekey(mdata[0].mname)}
                    />

                </div>
                <button id="search-button" type="button" class="btn btn-primary" style={{ margin: '30px 0px' }}>
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <Row>
                {
                    mdata.map((v) => {
                        return (

                            <Col sm="3">
                                <Card body style={{ margin: '30px' }}>
                                    <CardTitle tag="h5">
                                        {v.mname}
                                    </CardTitle>
                                    <CardText>
                                        {v.expdate}
                                    </CardText>
                                    <CardText>
                                        {v.mprice}
                                    </CardText>
                                    <CardText>
                                        {v.mdisc}
                                    </CardText>
                                    <Button>
                                        Button
                                    </Button>
                                </Card>
                            </Col>

                        )

                    })

                }
            </Row>
        </div>

    );
}

export default Usermedicine;

