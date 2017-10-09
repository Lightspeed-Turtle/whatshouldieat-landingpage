/*
 *
 * Home actions
 *
 */

import {
  CHECK_IF_CHROME,
  INSTALL_EXTENSION,
  ASK_TO_OPEN_NEW_TAB,
  DETECT_LANGUAGE,
  STOP_DETECTING_LANGUAGE,
  TOGGLE_SHARE_MODAL,
} from './constants';

export function checkIfChrome() {
  return {
    type: CHECK_IF_CHROME,
  };
}

export function installExtension() {
  return {
    type: INSTALL_EXTENSION,
  };
}

export function askToOpenNewTab() {
  return {
    type: ASK_TO_OPEN_NEW_TAB,
  };
}

export function detectLanguage() {
  return {
    type: DETECT_LANGUAGE,
  };
}

export function stopDetectingLanguage() {
  return {
    type: STOP_DETECTING_LANGUAGE,
  };
}

export function toggleShareModal() {
  return {
    type: TOGGLE_SHARE_MODAL,
  };
}
