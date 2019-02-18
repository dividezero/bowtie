import React from 'react';
import PropTypes from 'prop-types';
import ReactJsonView from 'react-json-view';

const JsonInput = ({ content, onEdit }) => (
  <ReactJsonView
    theme="monokai"
    enableClipboard={false}
    src={content}
    onEdit={onEdit}
    onAdd={onEdit}
    onDelete={onEdit}
    style={{ padding:20}}
  />
);

// Description - appears in the storybook item
JsonInput.description = `
JSON viewer and editor for the app.

This is an implementation of https://mac-s-g.github.io/react-json-view/demo/dist/
`;

// This allows for the definition of rules that each prop type has to follow in order to be used properly
JsonInput.propTypes = {
  content: PropTypes.shape({}),
  onEdit: PropTypes.func,
};

// What properties the component should have when nothing is defined
JsonInput.defaultProps = {
  content: {},
  onEdit: () => {},
};

export default JsonInput;
