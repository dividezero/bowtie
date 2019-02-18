/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import UiDisplay from './UiDisplay';

storiesOf('UiDisplay', module)
  .addDecorator((story, context) =>
    withInfo(UiDisplay.description)(story)(context),
  )
  .add('Empty object', () => <UiDisplay content={{}} />);
