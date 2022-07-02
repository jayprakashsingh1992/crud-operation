import React, {useEffect} from "react";
import {Container, Row, Col, Table} from "react-bootstrap";
import "../css/Home.css";

export default function Home() {

    useEffect(()=>{
        document.title = `Home | React User`;
    });

    return (
         <React.Fragment>
            <Container className="web-container">
                <h2 className="web-heading text-center mb-4">Home &nbsp;&nbsp;</h2>
            </Container>
        </React.Fragment>
    )
}