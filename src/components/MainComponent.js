import React, { Component } from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { PRODUCTS } from './shared/products';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
           products: PRODUCTS,
        };
    }

   

  render() {
      return (
          <div>
              <Header />
              
              
              <Footer />
          </div>
      );
  }
}

export default Main;

