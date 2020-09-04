import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
const BreadCrumb = ({last,children})=>{
    return (
        <>
            <span className="breadcrumb">{children} <FontAwesomeIcon icon={faCaretRight}/> </span>
        </>
    )
}

export default BreadCrumb;