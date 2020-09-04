import React from "react";
import { Card,Row,Col,Image } from "react-bootstrap";

const Item = ({id,title,price,address,picture,free_shipping})=>{
    return (
        <>
            <Card className="p-3">
                <Row>
                    <Col md={2}>
                        <Image className="w-100" src={picture}/>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col className="text-left"><h4>$ {price.amount}</h4></Col>
                        </Row>
                        <Row>
                            <Col className="text-left"><h5>{title}</h5></Col>
                        </Row>
                    </Col>
                    <Col md={2}><span>{address.state}</span></Col>
                </Row>
            </Card>
        </>
    )
}

export default Item;