import React from 'react';
import PropTypes from 'prop-types';
import Element from '../Element/Element';

import './Box.css';

const Box = ({ message, background, children }) => (
  <div
    className="Box"
    style={{
      backgroundColor: background,
    }}
  >
    {message && <div className="title">{message}</div>}
    <div className="content">
      {children
        .filter(child => child && child.type)
        .map((child, key) => {
          return <Element key={key} {...child} />;
        })}
    </div>
  </div>
);

// Description - appears in the storybook item
Box.description = `
JSON viewer and editor for the app.

This is an implementation of https://mac-s-g.github.io/react-json-view/demo/dist/
`;

// This allows for the definition of rules that each prop type has to follow in order to be used properly
Box.propTypes = {
  message: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.arrayOf(
    PropTypes.shape({
    }),
  ),
};

// What properties the component should have when nothing is defined
Box.defaultProps = {
  message: undefined,
  background: undefined,
  children: [],
};

export default Box;
