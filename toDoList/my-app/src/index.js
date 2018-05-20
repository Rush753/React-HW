import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App localSettings={JSON.parse(localStorage.getItem('storage'))} />, document.getElementById('root'));

