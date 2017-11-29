import React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncTemplate from './async.template';

const App = asyncTemplate(() => import("views/app/App"));
const Home = asyncTemplate(() => import("views/Home"));
const About = asyncTemplate(() => import("views/About"));
const Contact = asyncTemplate(() => import("views/Contact"));

const routes = (
    <Switch>
        <Route exact path="/" component={ App } />
        <Route exact path="/home" component={ Home } />
        <Route exact path="/about" component={ About } />
        <Route exact path="/contact" component={ Contact } />
    </Switch>
);

export default routes;
