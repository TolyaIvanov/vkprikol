import React from 'react';
import ReactDOM from 'react-dom';
import Index from "./js/Index";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Index />, document.getElementById('root'));

serviceWorker.unregister();