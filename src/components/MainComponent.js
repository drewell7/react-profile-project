import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import ProductInfo from './ProductInfoComponent';
import { PRODUCTS } from '../shared/products';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
           products: PRODUCTS,
           partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

   

  render() {

    const HomePage = () => {
        return (
            <Home 
                product={this.state.products.filter(product => product.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}
            />
        );
    };

    const ProductWithId = ({match}) => {
        return (
            <ProductInfo
                product={this.state.products.filter(product => product.id === 
                +match.params.productId)[0]}
                 />
        );
    };

      return (
          <div>
              <Header />
              <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/directory' render={() => <Directory products={this.state.products} />} />
                
                <Route path='/directory/:productId' component={ProductWithId} />
                
                <Redirect to='/home' />
                </Switch>
              
              
              <Footer />
          </div>
      );
  }
}

export default Main;

