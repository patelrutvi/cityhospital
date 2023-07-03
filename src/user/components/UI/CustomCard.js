import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function CustomCard({ values }) {
    return (
        <div>
            <Card
                style={{
                    width: '18rem'
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
                        {values.mname}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                       {values.mprice}
                    </CardSubtitle>
                    <CardText>
                       {values.expdate}
                    </CardText>
                    <CardText>
                       {values.mdisc}
                    </CardText>
                    {
                        values.Button ? <Button>
                            Button
                        </Button> : null
                    }

                </CardBody>
            </Card>
        </div>
    );
}

export default CustomCard;