import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [courses,setCategories] = useState([]);

    useEffect(()=>{
        fetch('https://course-server-nine.vercel.app/course')
        .then(res => res.json())
        .then(data => setCategories(data));
    },[])

    return (
        <div>
            <div>
                {
                    courses.map(course => <p key={course.id}><Link to={`/course/${course.id}`}>{course.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;<h3>This is Left side Nav</h3>