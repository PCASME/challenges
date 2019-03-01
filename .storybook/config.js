import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Challenges'
});

const req = require.context('../src/stories', true, /\.stories\.tsx$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

storybook.configure(loadStories, module);