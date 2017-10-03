/*global chrome*/

import React, { Component } from 'react';
import './App.css';

import { Grid, Row, Col, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isInstalled: false,
    };
  }

  thankUser() {
    this.setState({ isInstalled: true });
  }

  install() {
    chrome.webstore.install("https://chrome.google.com/webstore/detail/odopgncgnappoijnnfddcipaegjmnihl", this.thankUser.bind(this));
  }

  render() {
    return (
      <Grid className='App'>
        <Row className="Title">
          <Col>
            <h2>Ne cherchez plus.<br /> Laissez les recettes venir à vous automatiquement et gratuitement à chaque nouvel onglet</h2>
          </Col>
        </Row>
        <Row className="Brand">
          <Col className="hidden-xs">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3HPJBMG1_Rk?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
          </Col>
        </Row>
        <Row className="Download">
          <Col>
            { 
              !this.state.isInstalled 
              ? <Button id="install-button" onClick={this.install.bind(this)} bsSize="large" bsClass='Install'>Installez</Button> 
              : <Button id="install-button" bsSize="large" bsClass='Installed' disabled>Merci !</Button> 
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
