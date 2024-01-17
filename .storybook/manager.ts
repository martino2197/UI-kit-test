// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import ThemeT1 from './ThemeT1';

addons.setConfig({
  theme: ThemeT1,
});