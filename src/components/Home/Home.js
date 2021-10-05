import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <div>
            <header>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Navbar.Brand href="#" className="fw-bold">E-School Learning Point</Navbar.Brand>
                            <div className="ms-auto">
                                <Nav activeKey="/home">
                                    <Nav.Item>
                                        <Nav.Link href="/home">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="ms-4">
                                        <Nav.Link eventKey="link-1">Courses</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="ms-4">
                                        <Nav.Link eventKey="link-2">Teachers</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="ms-4">
                                        <Nav.Link eventKey="link-2">About Us</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/slide-img-1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>We have the learning and friendly environment for all</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/slide-img-2.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Live practice session to become well skilled</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="./images/slide-img-3.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Have problems with study case? We will give you the best learning strategy </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </header>

        </div>
    );
};

export default Home;