import React from "react";
import { useHistory } from 'react-router-dom';
import {Button} from 'react-bootstrap';

const ErrorPage = (props)=>{
    return (
        <>
            <p>No se encontró lo que busca! <Button variant="light">Volver</Button> </p>
        </>
    )
};

export default ErrorPage;