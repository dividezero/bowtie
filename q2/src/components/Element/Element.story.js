/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import Element from './Element';

const content = {
  type: 'box',
  message: 'Hello',
  background: '#058893',
};

storiesOf('Element', module)
  .addDecorator((story, context) =>
    withInfo(Element.description)(story)(context),
  )
  .add('Empty object', () => <Element {...content} />);
