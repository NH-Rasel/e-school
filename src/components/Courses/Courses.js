import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import MainContent from '../Home/MainContent';
import './Courses.css';

const Courses = () => {
    return (
        <div>
            <div className="search-container">
                <h2 className="m-3">Browse Your Desired Course</h2>
                <InputGroup size="lg">
                    <FormControl
                        placeholder="Search by Subject Name"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="secondary" id="button-addon2">
                        Search
                    </Button>
                </InputGroup>
            </div>
            <MainContent />
        </div>
    );
};

export default Courses;