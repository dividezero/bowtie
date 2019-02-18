/* global module */
import React from 'react';
import { storiesOf, withInfo } from '../../../.storybook/stories';

import JsonInput from './JsonInput';

storiesOf('JsonInput', module)
  .addDecorator((story, context) =>
    withInfo(JsonInput.description)(story)(context),
  )
  .add('Empty object', () => <JsonInput content={{}} onEdit={() => {}} />)
  .add('Console.log on edit', () => (
    <JsonInput content={{ test: 'this is a test' }} onEdit={console.log} />
  ));
