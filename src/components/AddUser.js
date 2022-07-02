import React, {useEffect, useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import "../css/AddUser.css";

export default function AddUser() {

    let history = useHistory();

    const [passwordType, setpasswordType] = useState("password");
    const [passwordText, setpasswordText] = useState(<i className="bi bi-eye" aria-hidden="true"></i>);

    const [cpasswordType, setcpasswordType] = useState("password");
    const [cpasswordText, setcpasswordText] = useState(<i className="bi bi-eye" aria-hidden="true"></i>);

    const handleToggle = () => {
        if (passwordType === 'password') {
            setpasswordType('text');
            setpasswordText(<i className="bi bi-eye-slash" aria-hidden="true"></i>);
        } else {
            setpasswordType('password');
            setpasswordText(<i className="bi bi-eye" aria-hidden="true"></i>);
        }
    }

    const handleToggle1 = () => {
        if (cpasswordType === 'password') {
            setcpasswordType('text');
            setcpasswordText(<i className="bi bi-eye-slash" aria-hidden="true"></i>);
        } else {
            setcpasswordType('password');
            setcpasswordText(<i className="bi bi-eye" aria-hidden="true"></i>);
        }
    }

    function resetForm(){
        setSalutation("");
        setFname("");
        setMname("");
        setLname("");
        setMobile("");
        setEmail("");
        setPassword("");
        setCpassword("");
    }

    useEffect(()=>{
        document.title = `Add User | React User`;
    });

    const [message, setMessage] = useState("");
    const [salutation, setSalutation] = useState("");
    const [fname, setFname] = useState("");
    const [mname, setMname] = useState("");
    const [lname, setLname] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    const isValid = salutation!= null && salutation.length > 0 && fname!= null && fname.length > 0 && lname!= null && lname.length > 0 &&
                    mobile!= null && mobile.length > 0 && email!= null && email.length > 0 && password!= null && password.length > 0 && 
                    cpassword!= null && cpassword.length > 0;

    const handleSubmit = () => {
        axios.post(`http://localhost:5000/contacts`,
        {
            salutation: salutation,
            fname: fname,
            mname: mname,
            lname: lname,
            mobile: mobile,
            email: email,
            password: password,
            cpassword: cpassword
        }).then((res) => {
            setSalutation("");
            setFname("");
            setMname("");
            setLname("");
            setMobile("");
            setEmail("");
            setPassword("");
            setCpassword("");
            setMessage("User Created Successfully");
            console.log(res,"send contact");
        })
        history.push("/");
    };

    return (
        <React.Fragment>
            <Container className="web-container">
                <h2 className="web-heading text-center mb-4">Add User &nbsp;&nbsp;</h2>
                <div className="message">{message ? <p>{message}</p> : null}</div>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8} className="regform">
                        <Form className="myform">
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput1">
                                        <Form.Control className="form__field" type="text" name="salution"
                                            value={salutation}  onChange={(e) => setSalutation(e.target.value)} />
                                        <Form.Label className="form__label">Salutation Eg:- Mr. or Mrs.</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput2">
                                        <Form.Control className="form__field" type="text" name="fname"
                                            value={fname}  onChange={(e) => setFname(e.target.value)}/>
                                        <Form.Label className="form__label">First Name</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput3">
                                        <Form.Control className="form__field" type="text" name="mname"
                                            value={mname}  onChange={(e) => setMname(e.target.value)}/>
                                        <Form.Label className="form__label">Middle Name</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput4">
                                        <Form.Control className="form__field" type="text" name="lname"
                                            value={lname}  onChange={(e) => setLname(e.target.value)}/>
                                        <Form.Label className="form__label">Last Name</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput5">
                                        <Form.Control className="form__field" type="phone" name="mobile"
                                            value={mobile}  onChange={(e) => setMobile(e.target.value)} maxLength={10}/>
                                        <Form.Label className="form__label">Mobile Number</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput6">
                                        <Form.Control className="form__field" type="email" name="email"
                                            value={email}  onChange={(e) => setEmail(e.target.value)}/>
                                        <Form.Label className="form__label">e-Mail ID</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput7">
                                        <Form.Control className="form__field" type={passwordType} value={password} name="password"
                                            onChange={(e) => setPassword(e.target.value)} />
                                        <a className="button" onClick={handleToggle} style={{cursor: "pointer"}}>
                                            {passwordText}
                                        </a>
                                        <Form.Label className="form__label">Password</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput8">
                                    <Form.Control className="form__field" type={cpasswordType} value={cpassword} name="cpassword"
                                        onChange={(e) => setCpassword(e.target.value)}/>
                                        <a className="button" onClick={handleToggle1} style={{cursor: "pointer"}}>
                                            {cpasswordText}
                                        </a>
                                        <Form.Label className="form__label">Confirm Password</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="act-btn">
                                <Col md={6} className="left-btn">
                                    <Button className="custom-btn btn-7" onClick={handleSubmit} disabled={!isValid}>Register</Button>
                                </Col>
                                <Col md={6} className="right-btn">
                                    <Button className="custom-btn btn-7" onClick={resetForm}>Cancel</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}