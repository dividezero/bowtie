import React from 'react';
import PropTypes from 'prop-types';
import Element from '../Element/Element';

import './UiDisplay.css';

const UiDisplay = ({ content }) => (
  <div className="UiDisplay">{content.type && <Element {...content} />}</div>
);

// Description - appears in the storybook item
UiDisplay.description = `
Ui display will receive a JSON object and create UI from it
`;

// This allows for the definition of rules that each prop type has to follow in order to be used properly
UiDisplay.propTypes = {
  content: PropTypes.shape({}),
};

// What properties the component should have when nothing is defined
UiDisplay.defaultProps = {
  content: {},
};

export default UiDisplay;
