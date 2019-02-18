import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Box/Box';

const Element = params => {
  const { type, message, background } = params;

  switch (type) {
    case 'box':
      return <Box {...params} />;
    case 'text':
      return (
        <div style={{ backgroundColor: background }}>
          <p>{message}</p>
        </div>
      );
    default:
  }
  return <div />;
};

// Description - appears in the storybook item
Element.description = `
Element will transform itself dependent of type. This is the transformation controller component
`;

// This allows for the definition of rules that each prop type has to follow in order to be used properly
Element.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string,
  background: PropTypes.string,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
    }),
  ),
};

// What properties the component should have when nothing is defined
Element.defaultProps = {
  message: undefined,
  background: undefined,
  children: [],
};

export default Element;
