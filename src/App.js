/*global chrome*/
/*global window*/
/*global FB*/

import React, { Component } from 'react';
import './App.css';

import logo from './logo.png';
import laptop from './laptop.png';

import { Grid, Row, Col, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInstalled: false,
      isChrome: false,
    };
  }

  componentWillMount() {
    if (!!window.chrome && !!window.chrome.webstore) {
      this.setState({ isChrome: true });
    }
  }

  handleInstall() {
    this.setState({ isInstalled: true });
  }

  install() {
    chrome.webstore.install("https://chrome.google.com/webstore/detail/odopgncgnappoijnnfddcipaegjmnihl", this.handleInstall.bind(this));
  }

  handleShareClick() {
    FB.ui({
      method: 'share',
      display: 'popup',
      hashtag: '#ilovefood',
      // mobile_iframe: true,
      href: 'https://www.whatshouldieat.xyz',
    }, function(response){});
  }

  render() {

    const buttonToShow = (!this.state.isInstalled
    ? <Button className="install-button" onClick={this.install.bind(this)} bsSize="large">Essayez</Button> 
    : <Button className="install-button" bsSize="large" disabled>Ouvrez un nouvel onglet !</Button>);

    return (
      <div style={{ height: "100%" }}>
        <Grid className='App'>
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
                <h2>Ne cherchez plus! Découvrez une nouvelle recette alléchante et inspirante à l'ouverture de chaque nouvel onglet Chrome de votre ordinateur.</h2>
                { 
                  this.state.isChrome 
                    ? buttonToShow
                    : <Button className="install-button" bsSize="large" disabled>Cette application nécessite Chrome</Button>
                }
              </Col>

            </Row>
            <footer className="footer">
              <div className="left"><a onClick={this.handleShareClick} href="#">Partagez 💛</a></div>
              <div className="right">Une initiative de <a className="underline" target="_blank" href="https://www.facebook.com/lightspeedturtle">Lightspeed Turtle</a></div>
            </footer>
          </div>
        </Grid>

      </div>
    );
  }
}

export default App;
