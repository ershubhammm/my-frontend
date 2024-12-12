import React from "react";
import SideBar from "./sideBar";
import { Col, Container, Row } from "react-bootstrap";
import Category from "./form";

const Home = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs={3} md={2} className="bg-dark text-light p-3 sidebar">
                        <SideBar />
                    </Col>
                    <Col xs={9} md={10} className="content">
                        <div className="m-3">
                            <Category />
                        </div>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default Home