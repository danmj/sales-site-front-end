import React from 'react';
import ProductView from '../components/ProductView.js';
import { Route } from 'react-router-dom';

const ProductViewContainer = ({ match, products }) => (
  <div>
      <Route path={`${match.url}/:productId`} render={routerProps => <ProductView {...routerProps} /> }/>
  </div>
)

export default ProductViewContainer
