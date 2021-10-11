import './Footer.css';

import { Container , Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { select_menu } from '../../../redux/actions/menu_footer';


const Footer = (props) => {
  let history = useHistory();
  const prev_btn = (cur_page_id) => {
    history.push('/cars');
    // history.goBack();
    // if(cur_page_id >= 1 || cur_page_id <= 3) {
    //   cur_page_id = cur_page_id - 1;
    //   props.onSelItem(cur_page_id);
    // }
  }
  const next_btn = (cur_page_id) => {
    if(cur_page_id >= 1 || cur_page_id <= 3) {
      cur_page_id = cur_page_id + 1;
      props.onSelItem(cur_page_id);
    }
  }
  
  // window.alert(props.cur_state.isNext);
  return (
    <>
        <div className="footer">
            <Container>
                <div className="footer-inner">
                    <Button className="footer-btn "  disabled={!props.cur_state.isPrev} onClick={ () => prev_btn(props.cur_state.item)}>Prev</Button>
                    <div className="total-price"><span>65432</span></div>
                    <Button className="footer-btn" disabled={!props.cur_state.isNext} onClick={ () => next_btn(props.cur_state.item)}>Next</Button>
                </div>
            </Container>   
        </div>                
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    cur_state : state.menu_footer
  }
}
const mapActionsToProps = {
  onSelItem : select_menu
}
export default connect(mapStateToProps , mapActionsToProps)(Footer);
