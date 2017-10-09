/* global chrome */
/* global navigator */
/* global localStorage */


import { takeLatest, put, cps } from 'redux-saga/effects';

import { changeLocale } from 'containers/LanguageProvider/actions';
import { INSTALL_EXTENSION, DETECT_LANGUAGE } from './constants';
import { askToOpenNewTab, stopDetectingLanguage } from './actions';

const appUrl = 'https://chrome.google.com/webstore/detail/odopgncgnappoijnnfddcipaegjmnihl';
const languageKey = 'lang';

export function* promptInstall() {
  yield cps(chrome.webstore.install, appUrl);
  yield put(askToOpenNewTab());
}

export function* detectLanguage() {
  let userLocale = localStorage.getItem(languageKey);

  if (!userLocale) {
    const browserLang = navigator.language || navigator.userLanguage;
    userLocale = browserLang.substring(0, 2);
    localStorage.setItem(languageKey, userLocale);
  }

  yield put(changeLocale(userLocale));
  yield put(stopDetectingLanguage());
}

export default function* rootSaga() {
  yield [
    takeLatest(INSTALL_EXTENSION, promptInstall),
    takeLatest(DETECT_LANGUAGE, detectLanguage),
  ];
}
