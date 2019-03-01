import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChallengeCard from '../components/Main/ChallengeCard/ChallengeCard';

storiesOf('Challenge', module)
  .add('default', () => (
    <ChallengeCard challenge={{
      title: 'Challenge title',
      description: 'Challenge description',
      category: 'Challenge category'
    }} />
  ));