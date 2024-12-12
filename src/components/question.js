import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import SideBar from "./sideBar";

const QuestionForm = ({ categories, category_id, setCategoryId, question, setQuestion, handleSubmit }) => {
    return (
        <Container fluid>
            <Row>
                {/* Sidebar */}
                <Col xs={3} md={2} className="bg-dark text-light p-3 sidebar">
                    <SideBar />
                </Col>

                {/* Main Content */}
                <Col xs={9} md={10} className="content">
                    <div className="m-3">
                        <h3>Question Form</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Select Category</Form.Label>
                                <Form.Select
                                    aria-label="Select a category"
                                    value={category_id}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    required
                                >
                                    <option value="">Select Category</option>
                                    {categories?.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Question</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your question"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button type="submit">Submit</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default QuestionForm;
