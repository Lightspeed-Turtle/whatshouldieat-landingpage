import React, { Component } from 'react';
import './App.css';

import { Grid, Row, Col, Button } from 'react-bootstrap';

class App extends Component {
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
            <h1>What should I eat</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3HPJBMG1_Rk?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
          </Col>
        </Row>
        <Row className="Download">
          <Col>
            <a href="https://chrome.google.com/webstore/detail/what-should-i-eat-by-ligh/odopgncgnappoijnnfddcipaegjmnihl">
              <Button bsSize="large" bsClass='Install'>Installez</Button>
            </a>
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
