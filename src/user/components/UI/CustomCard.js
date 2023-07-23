import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function CustomCard({ values }) {
    return (

        <div>
            <Card  body outline color="success"
                style={{
                    width: '18rem',
                    // backgroundColor: '#333',
                    // borderColor: '#333',
                    // color:'#fff'
                    margin:'20px'
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
                    <CardText>
                        {values.desc}
                    </CardText>
                    {
                        values.Button ? null : <Button style={{backgroundColor: 'green'}}>
                            ADD TO CART
                        </Button>
                    }

                </CardBody>
            </Card>
        </div>
    );
}

export default CustomCard;