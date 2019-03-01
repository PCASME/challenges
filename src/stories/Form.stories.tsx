import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from '../components/Main/Form/Form';

storiesOf('Challeng Form', module)
  .add('default', () => (
    <Form saving={false} saveChallenge={action('saveChallenge')} />
  ))
  .add('saving', () => (
    <Form saving={true} saveChallenge={action('saveChallenge')} />
  ));