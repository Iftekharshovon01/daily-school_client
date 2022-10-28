import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData()
    const {name, details, image} = course;
    return (
        <div className='d-flex justify-content-center'>
             <Card style={{width: "400px", height:"300px"}}>
                <Card.Img style={{height:"300px"}} variant="top" src={image} />
                <Card.Body className='text-center' >
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                    <Link className='d-flex justify-content-center' to={`/premium`}><Button variant="primary">Get Premium</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;
