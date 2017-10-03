/*global chrome*/
/*global window*/

import React, { Component } from 'react';
import './App.css';

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

  render() {

    const buttonToShow = (!this.state.isInstalled
    ? <Button id="install-button" onClick={this.install.bind(this)} bsSize="large" bsClass='Install'>Installez</Button> 
    : <Button id="install-button" bsSize="large" bsClass='Installed' disabled>Ouvrez un nouvel onglet !</Button>);

    return (
      <Grid className='App'>
        <Row className="Title">
          <Col>
            <h2>Ne cherchez plus.<br /> Laissez les recettes venir à vous automatiquement et gratuitement à chaque nouvel onglet</h2>
          </Col>
        </Row>
        <Row className="Download">
          <Col>
            { 
              this.state.isChrome 
                ? buttonToShow
                : <Button id="install-button" bsSize="large" bsClass='Installed' disabled>Cette application requiert Chrome</Button>
            }
          </Col>
        </Row>
        <Row className="Footer">
          <Col>
            <h3>Créé et propulsé par <a href="https://www.facebook.com/lightspeedturtle/">Lightspeed Turtle</a></h3>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
