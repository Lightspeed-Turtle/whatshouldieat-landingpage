/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHECK_IF_CHROME,
  ASK_TO_OPEN_NEW_TAB,
  STOP_DETECTING_LANGUAGE,
  TOGGLE_SHARE_MODAL,
} from './constants';

import * as browserService from './browserService';

const initialState = fromJS({
  isDesktopChrome: false,
  isMobileChrome: false,
  extensionIsInstalled: false,
  hasLanguageBeenDetected: false,
  isShareModalOpen: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_IF_CHROME:
      return state.set('isDesktopChrome', browserService.isDesktopChrome())
                  .set('isMobileChrome', browserService.isMobileChrome());

    case ASK_TO_OPEN_NEW_TAB:
      return state.set('extensionIsInstalled', true);

    case STOP_DETECTING_LANGUAGE:
      return state.set('hasLanguageBeenDetected', true);

    case TOGGLE_SHARE_MODAL:
      return state.update('isShareModalOpen', (value) => !value);

    default:
      return state;
  }
}

export default homeReducer;
