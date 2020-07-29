import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import PostPage from './pages/PostPage';

export default function Routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/posts/:id" exact component={PostPage} />
            </Switch>
        </BrowserRouter>

    );
}