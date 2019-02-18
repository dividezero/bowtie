import React from 'react';
import ReactDOM from 'react-dom';
import JsonInput from './JsonInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<JsonInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
