import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from '../routes/';

const App = () => <BrowserRouter>{ routes }</BrowserRouter>;

export default App;
