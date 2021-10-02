import './Sammary.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Col, Container, Row } from 'react-bootstrap';


function Summary() {
  return (
    <div className="main-container">
        <Container>
            <Row>
                <Col md="8">
                    <div className="car-detail">
                        <div className="selected-car">
                            <img src="./cars/model_s/model_s_white_wheel_1.png" alt="selected_car" />
                        </div>                           
                    </div>    
                </Col>
                <Col md="4">
                    <div className="setting">                        
                        <div className="select-option">
                            <h3 className="text-align-center">Your Model</h3>
                            <span className="delivery">Estimated delivery: 5-9 weeks</span>
                            <h4>Summary</h4>
                            <ul>
                                <li><span>sd</span><span>sdsd</span></li>
                                <li><span>sd</span><span>sdsd</span></li>
                                <li><span>sd</span><span>sdsd</span></li>
                                <li><span>sd</span><span>sdsd</span></li>
                            </ul>
                            <div><strong>Total Price</strong><span>32123</span></div>
                        </div>                        
                    </div>
                </Col>
            </Row>
        </Container>               
    </div>
  );
}

export default Summary;
