/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import Box from './Box';

storiesOf('Box', module)
  .addDecorator((story, context) => withInfo(Box.description)(story)(context))
  .add('Default object', () => (
    <Box
      {...{
        type: 'box',
        message: 'title',
        background: 'cornflowerblue',
        children: [],
      }}
    />
  ))
