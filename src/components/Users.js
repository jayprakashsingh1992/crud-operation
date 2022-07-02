import React, { useEffect, useState } from "react";
import axios from "axios";
import {Container, Row, Col, Table} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../css/Users.css";

export default function Users() {

    const [Users, fetchUsers] = useState([])
    const getData = () => {
        axios.get(`http://localhost:5000/contacts`).then((res) => {
            console.log(res,"contacts list");
            fetchUsers(res.data)
        })
    }
    useEffect(() => {
        getData()
        document.title = `Users List | React User`;
    }, []);

    const deleteUser = async id => {
        await axios.delete(`http://localhost:5000/contacts/${id}`)
        getData();
    }

    return (
         <React.Fragment>
            <Container fluid className="web-container">
                <h2 className="web-heading text-center mb-4">Users &nbsp;&nbsp;</h2>
                <Row>
                    <div className="genders">
                        <input type="checkbox" value="Male" id="Male" />&nbsp;&nbsp; Male &nbsp;&nbsp;
                        <input type="checkbox" value="Female" id="Female" />&nbsp;&nbsp; Female &nbsp;&nbsp;
                        <input type="checkbox" value="Others" id="Others" />&nbsp;&nbsp; Others &nbsp;&nbsp;
                    </div>
                    <Col md={2}></Col>
                    <Col md={8} className="usersform">
                        <Table responsive="md" striped bordered hover bg="primary" className="mytable">
                            <thead>
                                <tr>
                                    <th className="mydata-table">ID</th>
                                    <th className="mydata-table">Full Name</th>
                                    <th className="mydata-table">Gender</th>
                                    <th className="mydata-table">Mobile No.</th>
                                    <th className="mydata-table">e-Mail ID</th>
                                    <th className="mydata-table">Address</th>
                                    <th className="mydata-table" colSpan={3}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Users.map((user, i) => {
                                    return (
                                        <tr key={i}>
                                            <td className="mydata-table">
                                                {i+1}
                                            </td>
                                            <td className="mydata-table">
                                                {user.salutation + " " + user.fname + " " + user.mname + " " + user.lname }
                                            </td>
                                            <td className="mydata-table">
                                                {user.gender}
                                            </td>
                                            <td className="mydata-table">
                                                +91-{user.mobile}
                                            </td>
                                            <td className="mydata-table">
                                                {user.email}
                                            </td>
                                            <td className="mydata-table">
                                                {user.address}
                                            </td>
                                            <td className="mydata-table">
                                                <p className="mytable-icon">
                                                    <NavLink to={`/user/${user.id}`}>
                                                        <i className="bi bi-eye" aria-hidden="true"></i>
                                                    </NavLink>
                                                </p>
                                            </td>
                                            <td className="mydata-table">
                                                <p className="mytable-icon">
                                                    <NavLink to={`/edit-user/${user.id}`}>
                                                        <i className="bi bi-pencil" aria-hidden="true"></i>
                                                    </NavLink>
                                                </p>
                                            </td>
                                            <td className="mydata-table">
                                                <p className="mytable-icon" onClick={()=>deleteUser(user.id)}>
                                                    {/* <Link onClick={()=>deleteUser(user.id)}> */}
                                                        <i className="bi bi-recycle" aria-hidden="true"></i>
                                                    {/* </Link> */}
                                                </p>
                                            </td>
                                        </tr>
                                    )
                                })} 
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}