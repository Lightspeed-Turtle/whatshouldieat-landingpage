/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { FormattedMessage } from 'react-intl';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import { changeLocale } from 'containers/LanguageProvider/actions';

import SocialMediaButtons from 'components/SocialMediaButtons';

import { checkIfChrome, installExtension, detectLanguage, toggleShareModal } from './actions';

import logo from './logo.png';
import laptop from './laptop.png';

import messages from './messages';
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';

import './index.css';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { home, verifyBrowser, detectUserLanguage } = this.props;

    verifyBrowser();

    if (!home.hasLanguageBeenDetected) {
      detectUserLanguage();
    }
  }

  render() {
    const { promptInstallation, home, changeLanguage, toggleShare } = this.props;

    const buttonToShow = (!home.extensionIsInstalled
      ? <Button className="install-button" onClick={() => promptInstallation()} bsSize="large"><FormattedMessage {...messages.button_not_installed} /></Button>
      : <Button className="install-button" bsSize="large" disabled><FormattedMessage {...messages.button_already_installed} /></Button>);

    return (
      <div style={{ height: '100%' }}>
        <Grid className="App">
          <div className="page-wrap">
            <Row className="logo-row">

              <Col >
                <img className="logo" src={logo} alt="What Should I Eat?" />
              </Col>

            </Row>

            <Row className="content-row">

              <Col lg={6} sm={12}>
                <img className="image" src={laptop} alt="What Should I Eat?" />
              </Col>

              <Col className="text" lg={6} sm={12}>
                <h1>What Should I Eat?</h1>
                <h2><FormattedMessage {...messages.description} /></h2>
                {
                  home.isDesktopChrome
                    ? buttonToShow
                    : <Button className="install-button" bsSize="large" disabled><FormattedMessage {...messages.requires_chrome_desktop} /></Button>
                }
              </Col>

            </Row>
            <footer className="footer">
              <div className="left">
                <a onClick={() => changeLanguage('fr')} href="#lang">FR</a>
                <a onClick={() => changeLanguage('en')} href="#lang">EN</a>
                <a onClick={() => toggleShare()} href="#share"><FormattedMessage {...messages.share} /> <span role="img" aria-label="heart">💛</span></a>
                <Dialog
                  actions={
                    <FlatButton
                      label="OK"
                      primary
                      keyboardFocused
                      onClick={() => toggleShare()}
                    />}
                  modal
                  open={home.isShareModalOpen}
                  bodyStyle={{ padding: 0 }}
                >
                  <SocialMediaButtons />
                </Dialog>
              </div>

              <div className="right"><FormattedMessage {...messages.lightspeedturtle} /><a className="underline" target="_blank" href="https://www.facebook.com/lightspeedturtle">Lightspeed Turtle</a></div>
            </footer>
          </div>
        </Grid>

      </div>
    );
  }
}

Home.propTypes = {
  verifyBrowser: PropTypes.func.isRequired,
  promptInstallation: PropTypes.func.isRequired,
  detectUserLanguage: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  toggleShare: PropTypes.func.isRequired,
  home: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
});

function mapDispatchToProps(dispatch) {
  return {
    verifyBrowser: () => dispatch(checkIfChrome()),
    promptInstallation: () => dispatch(installExtension()),
    detectUserLanguage: () => dispatch(detectLanguage()),
    changeLanguage: (locale) => dispatch(changeLocale(locale)),
    toggleShare: () => dispatch(toggleShareModal()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
