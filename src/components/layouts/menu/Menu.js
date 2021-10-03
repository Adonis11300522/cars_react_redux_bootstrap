
import './Menu.css';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';


import { connect } from 'react-redux';
import {  set_item } from '../../../actions/page';
import PropTypes from 'prop-types' ;

const Menu = (props) => {
  window.alert(props.cur_item.item) ;
  // window.alert("dfdf");

  const select_item = (current_index) => {
    props.onSelItem(current_index);
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand href="#home"><img src="./logo.svg" width="150"  className="d-inline-block align-top" alt="Alter Class"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className="active" ><Link to="/cars">1.Cars</Link></Nav.Link>
                <Nav.Link href=""><Link to="/exterio"  onClick={() => select_item(2)}>2.Exterio</Link></Nav.Link>       
                <Nav.Link ><Link to="/summary" >3.Sammary</Link></Nav.Link>      
            </Nav>
            <Nav>
                <Button className="Change-logo"><img src="./logo192.png" width="30"  className="d-inline-block align-top" alt="Alter Class"/></Button>{' '}
            </Nav>
        </Navbar.Collapse>
        </Container>
       </Navbar>
    </>
  );
}
Menu.propTypes ={
  onSelItem : PropTypes.func.isRequired ,
  cur_item : PropTypes.object.isRequired
}
const mapStateToProps = ( state, props ) => {
  return {
    cur_item : state.page
  }
}
const mapActionsToProps = {
  onSelItem : set_item
}
export default connect(mapStateToProps , mapActionsToProps)(Menu);
