import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Layout} from './containers/layout/Layout';
import Front from "./containers/Front";
import Listing from "./containers/Listing";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Route path="/" exact component={Front}/>
            <Route path="/:id" component={Listing}/>
        </Layout>
    </BrowserRouter>
);

export default App;
