import React from "react";
import { Card,Row,Col,Image } from "react-bootstrap";

const Item = ({id,title,price,address,picture,free_shipping})=>{
    return (
        <>
            <Card>
                <Row className="p-3">
                    <Col md={2} className="pt-16 pb-16">
                        <Image className="w-100" src={picture}/>
                    </Col>
                    <Col md={8}>
                        <Row className="mb-36">
                            <Col className="text-left">
                                <span className="font-24"> $ {price.amount} </span>
                                <span className="text-right">{free_shipping}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-left"><span className="font-18">{title}</span></Col>
                        </Row>
                    </Col>
                    <Col md={2}><span className="font-12">{address.state}</span></Col>
                </Row>
            </Card>
        </>
    )
}

export default Item;