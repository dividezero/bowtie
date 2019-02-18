import React from 'react';
import ReactDOM from 'react-dom';
import UiDisplay from './UiDisplay';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UiDisplay />, div);
  ReactDOM.unmountComponentAtNode(div);
});
