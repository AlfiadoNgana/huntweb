import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/products/:id" component={Product}/>
            <Route exat path="/" component={Main}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;