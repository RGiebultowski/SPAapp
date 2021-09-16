import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/HomePage.js';
import ProductPage from '../pages/ProductPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage.js';
import ErrorPage from '../pages/ErrorPage.js';
import LoginPage from '../pages/LoginPage.js';

const Page = () => {
    return (
        <> 
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" exact component={ProductPage} />
            <Route path="/contact" exact component={ContactPage} />
            <Route path="/admin" exact component={AdminPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route component={ErrorPage} />
        </Switch>
        </>
    );
}
 
export default Page;