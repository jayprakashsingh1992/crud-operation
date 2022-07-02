import React, {useEffect, useState} from "react";
import axios from "axios";
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import { useParams } from "react-router-dom";
import "../css/EditUser.css";

export default function EditUser() {

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

    }

    const {id} = useParams();

    const [Users, fetchUsers] = useState([])
    console.log(Users,"contacts list");
    const getData = () => {
        axios.get(`http://localhost:5000/contacts/${id}`).then((res) => {
            //console.log(res,"contacts list");
            fetchUsers(res.data)
        })
    }

    useEffect(()=>{
        getData(id)
        document.title = `Edit User | React User`;
    },[id]);

    useEffect(()=>{
        if(Users) {
            setState({...Users})
        }
    },[Users]);

    const [message, setMessage] = useState("")
    const [state, setState] = useState({
        salutation: "",
        fname: "",
        mname: "",
        lname: "",
        dob: "",
        age: "",
        proimage:"",
        gender: "",
        moption:"",
        mstatus: "",
        dom: "",
        ani: "",
        mobile: "",
        email: "",
        password: "",
        cpassword: "",
        address: "",
    })

    
   
    const {salutation, fname, mname, lname, dob, age,proimage, gender, moption, mobile, email, password, cpassword, mstatus, dom, address} = state;

    // const isValid = salutation!= null && salutation.length > 0 && fname!= null && fname.length > 0 && mname!= null &&
    //                 lname!= null && lname.length > 0 && mobile!= null && mobile.length > 0 && email!= null && email.length > 0 && 
    //                 password!= null && password.length > 0 && cpassword!= null && cpassword.length > 0;

    const handleInputChange = (e) => {
        let {name, value} = e.target;
        setState({...state, [name]: value })
    }

    const handleUpdate = () => {
        axios.put(`http://localhost:5000/contacts/${id}`,
        state).then((res) => {
            setMessage("User Updated Successfully");
            console.log(res,"update contact");
        })
    };

    return (
        <React.Fragment>
            <Container className="web-container">
                <h2 className="web-heading text-center mb-4">Edit User &nbsp;&nbsp;</h2>
                <div className="message">{message ? <p>{message}</p> : null}</div> 
                <Row>
                    <Col md={2}></Col>
                    <Col md={8} className="regform">
                        <Form className="myform">
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput1">
                                        <Form.Control className="form__field" type="text" name="salutation"
                                            value={salutation}  onChange={handleInputChange} />
                                        <Form.Label className="form__label">Salutation Eg Mr. or Mrs.</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput2">
                                        <Form.Control className="form__field" type="text" name="fname"
                                            value={fname}  onChange={handleInputChange}/>
                                        <Form.Label className="form__label">First Name</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput3">
                                        <Form.Control className="form__field" type="text" name="mname"
                                            value={mname}  onChange={handleInputChange} />
                                        <Form.Label className="form__label">Middle Name</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput4">
                                        <Form.Control className="form__field" type="text" name="lname"
                                            value={lname}  onChange={handleInputChange} />
                                        <Form.Label className="form__label">Last Name</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput5">
                                        <Form.Control className="form__field" type="number" name="mobile"
                                            value={mobile}  onChange={handleInputChange} />
                                        <Form.Label className="form__label">Mobile Number</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput6">
                                        <Form.Control className="form__field" type="email" name="email"
                                            value={email}  onChange={handleInputChange} />
                                        <Form.Label className="form__label">e-Mail ID</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput7">
                                        <Form.Control className="form__field" type={passwordType} value={password} name="password"
                                            onChange={handleInputChange} />
                                        <a className="button" onClick={handleToggle} style={{cursor: "pointer"}}>
                                            {passwordText}
                                        </a>
                                        <Form.Label className="form__label">Password</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput8">
                                    <Form.Control className="form__field" type={cpasswordType} value={cpassword} name="cpassword"
                                        onChange={handleInputChange} />
                                        <a className="button" onClick={handleToggle1} style={{cursor: "pointer"}}>
                                            {cpasswordText}
                                        </a>
                                        <Form.Label className="form__label">Confirm Password</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput5">
                                        <Form.Control className="form__field" type="date" name="dob"
                                            value={dob}  onChange={handleInputChange} />
                                        <Form.Label className="form__label">Date of Birth</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput5">
                                        <Form.Control className="form__field" type="phone" name="age"
                                            value={age}  onChange={handleInputChange} />
                                        <Form.Label className="form__label">Age</Form.Label>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    Profile image
                                    {/* <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput5">
                                        <Form.Control className="form__field" type="date" name="proimage"
                                            value={proimage}  onChange={handleInputChange} />
                                        <Form.Label className="form__label">Profile image</Form.Label>
                                    </Form.Group> */}
                                </Col>
                                <Col md={6}>
                                    M Status
                                    {/* <Form.Group className="" controlId="exampleForm.ControlInput5">
                                        <Form.Control className="" type="radio" name="gender"
                                            value={gender}  onChange={handleInputChange} /> Male
                                        <Form.Control className="" type="radio" name="gender"
                                            value={gender}  onChange={handleInputChange} /> Female
                                        <Form.Label className="">Gender</Form.Label>
                                    </Form.Group> */}
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    Date Of Marriage
                                    {/* <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput5">
                                        <Form.Control className="" type="radio" name="moption"
                                            value={moption}  onChange={handleInputChange} /> Married
                                        <Form.Control className="" type="radio" name="moption"
                                            value={moption}  onChange={handleInputChange} /> UnMarried
                                        <Form.Label className="">Gender</Form.Label>
                                    </Form.Group> */}
                                </Col>
                                <Col md={6}>
                                    Anniversary
                                    {/* <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput5">
                                        <Form.Control className="form__field" type="date" name="mstatus"
                                            value={mstatus}  onChange={handleInputChange} />
                                        <Form.Label className="form__label">Date of Marriage</Form.Label>
                                    </Form.Group> */}
                                </Col>
                            </Row>
                            <div>
                                <Form.Group className="mb-3 form__group field" controlId="exampleForm.ControlInput5">
                                    <Form.Control className="form__field" type="textarea" name="address"
                                        value={address}  onChange={handleInputChange} />
                                    <Form.Label className="form__label">Address</Form.Label>
                                </Form.Group>
                            </div>
                            <Row className="act-btn">
                                <Col md={6} className="left-btn">
                                    <Button className="custom-btn btn-7" onClick={handleUpdate}>Update</Button>
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