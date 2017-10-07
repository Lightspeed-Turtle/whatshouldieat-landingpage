/*global chrome*/
/*global window*/

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

  render() {

    const buttonToShow = (!this.state.isInstalled
    ? <Button id="install-button" onClick={this.install.bind(this)} bsSize="large" bsClass='Install'>Essayez</Button> 
    : <Button id="install-button" bsSize="large" bsClass='Installed' disabled>Ouvrez un nouvel onglet !</Button>);

    return (
      <Grid className='App'>
        <div className="page-wrap">
          <Row>
            <Col>
              <img className="logo" src={logo} alt="What Should I Eat?" />
            </Col>
          </Row>
          <Row className="content">
            <Col lg={6} sm={12} style={{ padding: 0 }}>
              <img className="image" src={laptop} alt="What Should I Eat?" />
            </Col>
            <Col className="text" lg={6} sm={12} style={{ textAlign: 'left' }}>
              <h1>What Should I Eat?</h1>
              <h2>Découvrez quoi manger une nouvelle recette alléchante et inspirante à l’ouverture de chaque nouvel onglet Chrome de votre ordinateur.</h2>
              { 
                this.state.isChrome 
                  ? buttonToShow
                  : <Button id="install-button" bsSize="large" bsClass='Installed' disabled>Cette application nécessite Chrome</Button>
              }
            </Col>
          </Row>
        </div>
        {/* <Row className="footer">
          <Col lg={6} >
            <h3><a href="#">Share</a></h3>
          </Col>
          <Col lg={6}>
            <h3>Une initiative de <a href="https://www.facebook.com/lightspeedturtle/">Lightspeed Turtle</a></h3>
          </Col>
        </Row> */}
      </Grid>
    );
  }
}

export default App;


{/* <Row className="Download">
<Col>
  { 
    this.state.isChrome 
      ? buttonToShow
      : <Button id="install-button" bsSize="large" bsClass='Installed' disabled>Cette application nécessite Chrome</Button>
  }
</Col>
</Row> */}