import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import NewsSummeryCard from '../Shared/NewsSummeryCard/NewsSummeryCard';

const Courses = () => {
    const courses = useLoaderData();
    return (
      <Container>
        <Row>
            <Col lg='2'>
                <LeftSideNav></LeftSideNav>
            </Col>
            <Col lg='10' className='d-flex flex-wrap'>
            {
              courses.map(course => <NewsSummeryCard key={course.id} course={course}></NewsSummeryCard>)
            }
            </Col>
        </Row>
  </Container>
    );
};

export default Courses;