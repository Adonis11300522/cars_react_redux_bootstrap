
import './Menu.css';
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

import { Link } from 'react-router-dom';


import { connect } from 'react-redux';
import PropTypes from 'prop-types' ;
import { select_menu } from '../../../redux/actions/menu_footer';

const Menu = (props) => {

  // window.alert(props.cur_item.isNext) ;

  const select_item = (current_index) => {
    props.onSelItem(current_index);
    props.history.push("")
  }

  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Container>
        <Navbar.Brand href="#home"><img src="./logo.svg" width="150"  className="d-inline-block align-top" alt="Alter Class"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Link to="/cars" onClick={() => select_item(1)} className={props.cur_item.item === 1 ? 'active nav-link' : 'nav-link'}>1.Cars</Link> 
                <Link to="/exterio"  onClick={() => select_item(2)} className={props.cur_item.item === 2 ? 'active nav-link' : 'nav-link'}>2.Exterio</Link>       
                <Link to="/summary" onClick={() => select_item(3)} className={props.cur_item.item === 3 ? 'active nav-link' : 'nav-link'}>3.Sammary</Link>      
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
const mapStateToProps = ( state ) => {
  return {
    cur_item : state.menu_footer
  }
}
const mapActionsToProps = {
  onSelItem : select_menu
}
export default connect(mapStateToProps , mapActionsToProps)(Menu);
