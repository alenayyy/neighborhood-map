import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

import Header from './Header'
import MapNavigation from './MapNavigation'
import MapContent from './MapContent'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>

        <Header />
        <Container fluid>
          <Row>
            <MapNavigation />
            <MapContent />
          </Row>
        </Container>
        <Footer />

      </div>
    );
  }
}

export default App;
