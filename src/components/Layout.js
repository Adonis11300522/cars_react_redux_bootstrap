
import React from 'react';
import Menu from './layouts/menu/Menu' ;
import Footer from './layouts/footer/Footer' ;

class Layout extends React.Component {
    constructor(props) {
        super(props);
    } 
    render() {
        return(
            <>
                <Menu />
                {this.props.children}
                <Footer />
            </>
        )
    }
}

export default Layout ;