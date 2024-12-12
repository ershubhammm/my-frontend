import React from 'react';
import { useState } from "react"
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

const CategoryForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async () => {
        let obj = {
            name, description
        }
        try {
            await axios.post('http://localhost:8100/user/postCertificateDetails', obj);
            alert('Category added successfully!');

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='m-3'>
                <h4>Category Form -</h4>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Category Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Category Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required />
                    </Form.Group>
                    <Button
                        type="submit"
                        onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>

        </>

    );
};

export default CategoryForm;
