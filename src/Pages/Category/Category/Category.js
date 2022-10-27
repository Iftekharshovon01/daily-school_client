import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from "../../Shared/NewsSummeryCard/NewsSummeryCard";

const Category = () => {

    const courses = useLoaderData();
    

    return (
        <div>
            <h2>News Category {courses.length}</h2>
            {
                courses.map(course => <NewsSummeryCard key={course.id} news={course} ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;