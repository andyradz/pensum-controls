import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './demo';
import Counter from './counter';
import Clock from './clock';

ReactDOM.render(<Demo />, document.querySelector('#root'));
ReactDOM.render(<Counter />, document.querySelector('#counter'));
ReactDOM.render(<Clock />, document.querySelector('#clock'));
