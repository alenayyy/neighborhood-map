import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

import Header from './Header'
import MapNavigation from './MapNavigation'
import MapContent from './MapContent'
import Footer from './Footer'

import data from './data.json';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      destinations: []
    }
  }

  componentWillMount() {
    this.setState({
      destinations: data.destinations
    });
  }

  render() {
    return (
      <div>

        <Header />
        <Container fluid>
          <Row>
            <MapNavigation destinations={this.state.destinations}/>
            <MapContent destinations={this.state.destinations} />
          </Row>
        </Container>
        <Footer />

      </div>
    );
  }
}

export default App;
