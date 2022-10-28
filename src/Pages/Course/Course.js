import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const Course = () => {
    const course = useLoaderData()
    const { name, details, image } = course;
    const ref = React.createRef();
    return (
        <div className='d-flex justify-content-center'>

            <Card ref={ref} style={{ width: "400px", height: "300px" }}>
                <Card.Img style={{ height: "300px" }} variant="top" src={image} />
                <Card.Body className='text-center' >
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link className='d-flex justify-content-center' to={`/premium`}><Button variant="primary">Get Premium</Button></Link>
                    <Pdf targetRef={ref} filename="codurse.pdf">
                        {({ toPdf }) => <button  onClick={toPdf}>Download Pdf</button>}
                    </Pdf>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Course;
