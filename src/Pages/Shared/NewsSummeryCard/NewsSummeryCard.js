import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsSummeryCard = ({course}) => {
    const {id, name,  image,details}= course;

    return (
        <div className='mb-2'>
            
            <Card className="text-center">

                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Img variant="top" src={image} />
                        <Card.Text>{details.length >200 ? <>{details.slice(0,200)+'....'} <Link to={`/course/${id}`}>Read More</Link></>
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