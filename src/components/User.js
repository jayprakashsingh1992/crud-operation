import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Container, Row, Col, Image} from "react-bootstrap";
import "../css/User.css";

export default function User() {

    const [user, setUser] = useState('');
    const { id } = useParams();
    useEffect(() => {
        document.title = "User";  
        getUser();
    },[]);

    function getUser () {
        axios.get(`http://localhost:5000/contacts/${id}`)
        .then(res =>{
            console.log(res, "contact list")
            setUser(res.data);
        })
    }

    return (
        <React.Fragment>
            <Container className="web-container">
                <h2 className="web-heading text-center mb-4">User &nbsp;&nbsp;</h2>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <div className="profile-pic">
                            <Image src="" alt="profile-picture" className="rounded"/>
                        </div>
                        <Row className="mytable-col mytable-row">
                            <Col md={6} className="mytable-col text-right">
                                Full Name
                            </Col>
                            <Col md={6} className="mytable-col">
                                {user.salutation + " " + user.fname + " " + user.mname + " " + user.lname}
                            </Col>
                            <Col md={6} className="mytable-col text-right">
                                Date Of Birth
                            </Col>
                            <Col md={6} className="mytable-col">
                                {user.dob}
                            </Col>
                            <Col md={6} className="mytable-col text-right">
                                Age
                            </Col>
                            <Col md={6} className="mytable-col">
                                {user.age}
                            </Col>
                            <Col md={6} className="mytable-col text-right">
                                Gender
                            </Col>
                            <Col md={6} className="mytable-col">
                                {user.gender}
                            </Col>
                            <Col md={6} className="mytable-col text-right">
                                Marital Status
                            </Col>
                            <Col md={6} className="mytable-col">
                                {user.mstatus}
                            </Col>
                            <Col md={6} className="mytable-col text-right">
                                Marriage Date
                            </Col>
                            <Col md={6} className="mytable-col">
                                {user.dom}
                            </Col>
                            <Col md={6} className="mytable-col text-right">
                                Anniversary
                            </Col>
                            <Col md={6} className="mytable-col">
                                {user.ann}
                            </Col>
                            <Col md={6} className="mytable-col text-right">
                                Mobile Number
                            </Col>
                            <Col md={6} className="mytable-col">
                                +91-{user.mobile}
                            </Col>
                            <Col md={6} className="mytable-col text-right">
                                e-Mail ID
                            </Col>
                            <Col md={6} className="mytable-col">
                                {user.email}
                            </Col>
                            <Col md={6} className="mytable-col text-right">
                                Password
                            </Col>
                            <Col md={6} className="mytable-col">
                                {user.password}
                            </Col>
                            <Col md={6} className="mytable-col text-right">
                                Full Address
                            </Col>
                            <Col md={6} className="mytable-col">
                                {user.address}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}