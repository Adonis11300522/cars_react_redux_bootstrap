import './Cars.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Col, Container, Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';


function Cars() {
  return (
    <div className="main-container">
        <Container>
            <Row>
                <Col md="8">
                    <div className="car-detail">
                        <Carousel fade>
                            <Carousel.Item interval={100000}>
                                <img src="./cars/model_s/model_s_white_wheel_1.png" alt="First slide" />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="./cars/model_x/model_x_white_wheel_1.png" alt="Second slide" className="scale" />
                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="./cars/model_y/model_y_white_wheel_1.png" alt="Third slide" />
                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                        <ul className="detail-data">
                            <li>
                                <span><h4>123 mi</h4></span>
                                <span>Range (EPA est.)</span>
                            </li>
                            <li>
                                <span><h4>123 mi</h4></span>
                                <span>Range (EPA est.)</span>
                            </li>
                            <li>
                                <span><h4>123 mi</h4></span>
                                <span>Range (EPA est.)</span>
                            </li>
                        </ul>
                    </div>    
                </Col>
                <Col md="4">
                    <div className="setting">                        
                        <div className="select-option">
                            <h4>Select Car</h4>
                            <div className="select-car">
                                <button className="active">Model S</button>
                                <button>Model X</button>
                                <button>Model Y</button>
                            </div>
                        </div>
                        <div className="select-option">
                            <h4>Select Type</h4>
                            <p className="setting-description">All cars have Dual Motor All-Wheel Drive, adaptive air suspension, premium interior and sound.</p>
                            <div className="select-type">
                                <button className="active">Model S</button>
                                <button>Model X</button>
                                <button>Model Y</button>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>               
    </div>
  );
}

export default Cars;
