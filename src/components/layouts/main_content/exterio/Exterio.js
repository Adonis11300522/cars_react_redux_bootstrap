import './Exterio.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Col, Container, Row } from 'react-bootstrap';


function Exterio() {
  return (
    <div className="main-container">
        <Container>
            <Row>
                <Col md="8">
                    <div className="car-detail">
                        <div className="selected-car">
                            <img src="./cars/model_s/model_s_white_wheel_1.png" alt="selected_car" />
                        </div>
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
                            <div className="select-color">
                                <button className="white-color active"></button>
                                <button className="black-color"></button>
                                <button className="gray-color"></button>
                                <button className="blue-color"></button>
                                <button className="red-color"></button>
                            </div>
                            <div className="select-color-property"><strong>sdfsdf</strong><span>sdsdf</span></div>
                        </div>
                        <div className="select-option">
                            <h4>Select Wheel</h4>
                            <div className="selected-wheel">
                                <div className="wheel-type active"><img src="./wheels/model_s/model_s_wheel_1.png" width="80" height="80" alt="wheel" /></div>
                                <div className="wheel-type"><img src="./wheels/model_x/model_x_wheel_1.png" width="80" height="80" alt="wheel" /></div>
                            </div>
                            <div className="select-wheel-property"><strong>sdfsdf</strong><span>sdsdf</span></div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>               
    </div>
  );
}

export default Exterio;
