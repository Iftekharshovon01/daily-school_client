import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsSummeryCard = ({course}) => {
    const {id, name,  image,details}= course;

    return (
        <div className='mb-5 mx-2'>
            
            <Card className="text-center" style={{width: "270px"}}>

                    <Card.Body style={{height:"470px"}}>
                        <Card.Title>{name}</Card.Title>
                        <Card.Img style={{height:"200px"}} variant="top" src={image} />
                        <Card.Text>{details.length >200 ? 
                        <>{details.slice(0,200)+'....'} 
                        <Link to={`/course/${id}`}><Button variant="primary">See Course</Button></Link></>
                        : 
                        <>{details}</>}</Card.Text>
                    </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <div>
                    </div>
                </Card.Footer>

            </Card>
            
        </div>
    );
};

export default NewsSummeryCard;