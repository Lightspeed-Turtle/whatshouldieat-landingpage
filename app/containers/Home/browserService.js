/* global window */

/* browserService : Operations on the browser API */

export function isDesktopChrome() {
  return !!window.chrome && !!window.chrome.webstore;
}

export function isMobileChrome() {
  return !!window.chrome && !window.chrome.webstore;
}

