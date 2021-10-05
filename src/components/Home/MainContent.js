import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import './MainContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const MainContent = () => {
    const [contents, setContents] = useState([]);
    useEffect(() => {
        fetch('/mainContent.json')
            .then(res => res.json())
            .then(data => setContents(data));
    }, [])
    return (
        <div>
            <h2>-Featured Courses-</h2>
            <div className="container">
                {
                    contents.map(content => <div className="single-content">
                        <img style={{ borderRadius: '10px', width: 'auto' }} src={content.img} alt="" />
                        <div style={{ margin: '20px' }}>
                            <h3>{content.title}</h3>
                            <p><small>Subject: {content.subject}</small></p>
                            <Rating
                                initialRating={content.rating}
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                readonly ></Rating><p>({content.rating}) </p>
                            <p><strong>Price: ${content.price}</strong></p>
                            <Button variant="primary">Learn More</Button>
                        </div>
                    </div>)
                }

            </div>
            <Button className="browse-btn"><FontAwesomeIcon icon={faBookReader} /> <Link style={{ textDecoration: 'none', color: 'white' }} to='/courses'>Browse All Courses</Link></Button>

        </div>
    );
};

export default MainContent;