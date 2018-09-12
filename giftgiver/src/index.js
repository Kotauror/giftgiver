import React from 'react';
import {render } from 'react-dom';

import App from './components/App';


// <App /> - GSX app
// in public/index.html (created automatically)
// there is a div with id of root enabled to render react app
render(<App />, document.getElementById('root'))
