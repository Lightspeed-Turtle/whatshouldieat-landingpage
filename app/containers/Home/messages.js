/*
 * Home Messages
 *
 * This contains all the text for the Home component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  description: {
    id: 'app.containers.Home.description',
    defaultMessage: 'Look no further! Discover what to eat with a tantalizing and inspiring new recipe each time you open a new Chrome tab on your computer.',
  },
  button_not_installed: {
    id: 'app.containers.Home.button_not_installed',
    defaultMessage: 'Try it',
  },
  button_already_installed: {
    id: 'app.containers.Home.button_already_installed',
    defaultMessage: 'Open a new tab',
  },
  requires_chrome_desktop: {
    id: 'app.containers.Home.requires_chrome_desktop',
    defaultMessage: 'Requires Chrome',
  },
  share: {
    id: 'app.containers.Home.share',
    defaultMessage: 'Share',
  },
  lightspeedturtle: {
    id: 'app.containers.Home.lightspeedturtle',
    defaultMessage: 'An initiative of ',
  },
});
