import React, { useEffect, useState } from 'react';
import './Teachers.css';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('/teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, [])
    return (
        <div>
            <h2 className="mt-5">-Our Teacher panels-</h2>
            <div className="container">
                {
                    teachers.map(teacher => <div
                        key={teacher.id} className="single-teacher">
                        <img style={{ width: '200px', margin: "10px" }} src={teacher.img} alt="" />
                        <h3>{teacher.name}</h3>
                        <p>Email: {teacher.email}</p>
                        <p>Contact: {teacher.phone}</p>
                        <p>Visit me: {teacher.website}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Teachers;