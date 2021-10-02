
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Container } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';


function App() {
  return (
    <div>
        <div className="footer">
            <Container>
                <div className="footer-inner">
                    <Button className="footer-btn">Prev</Button>
                    <div className="total-price"><span>65432</span></div>
                    <Button className="footer-btn">Next</Button>
                </div>
            </Container>   
        </div>                
    </div>
  );
}

export default App;
