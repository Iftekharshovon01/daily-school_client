import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData()
    const {name, details, image} = course;
    return (
        <div>
             <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                    {details}
                    </Card.Text>
                   
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;
