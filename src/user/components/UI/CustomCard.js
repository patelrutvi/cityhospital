import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function CustomCard({ values, btnval, onclick1 }) {
    return (

        <div>
            <Card body outline color="success"
                style={{

                    // backgroundColor: '#333',
                    // borderColor: '#333',
                    // color:'#fff'
                    margin: '20px'
                }}
            >
                {
                    values.url ? <img
                        alt="Sample"
                        src="https://picsum.photos/300/200"
                    /> : null
                }

                <CardBody>
                    <CardTitle tag="h5">
                        <p>Medicine Name: <b>{values.name}</b> </p>
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        <p>price: <b>{values.price}</b> </p>

                    </CardSubtitle>
                    <CardText>
                        <p>Expiry: <b>{values.expiry}</b> </p>

                    </CardText>
                    <CardText style={{ height: '60px', overflow: 'auto' }}>
                        {values.desc}
                    </CardText>
                    {
                        btnval ? <Button
                            style={{ backgroundColor: 'green' }}
                            onClick={() => onclick1(values.id)}

                        >
                            {btnval}
                        </Button> : null
                    }

                </CardBody>
            </Card>
        </div>
    );
}

export default CustomCard;