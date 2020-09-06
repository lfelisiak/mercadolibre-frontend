import React from "react";
import { Image } from "react-bootstrap";
import imageSrc from "../../assets/images/ic_shipping.png"
const FreeShipping = ({freeShipping})=>{
    return (
        freeShipping &&
        <Image src={imageSrc}></Image>
    )
}

export default FreeShipping;