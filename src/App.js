import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

import Header from './Header'
import MapNavigation from './MapNavigation'
import MapContent from './MapContent'
import Footer from './Footer'

import _ from 'lodash'

import data from './data.json'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      destinations: [],
      currentDestination: ""
    }
  }

  componentWillMount() {
    this.setState({
      destinations: data.destinations
    });
  }

  fetchInfo = (destinationTitle) => {

    let destination = _.find(this.state.destinations, {title: destinationTitle});
    let wikipediaUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';

    fetch(wikipediaUrl+encodeURI(destination.name), {
      method: 'GET',
      headers: {'Content-Type':'application/json'}
    })
    .then(result => {
      return result.json();
    })
    .then(json => {
      if(json.extract) {
        destination.description = 'Wikipedia: "'+json.extract+'"';
      }
      this.setState({
        currentDestination: destination
      });
    })
    .catch(error => {
      // this.stopLoading();
      console.log("extract not found; using default description");
      this.setState({
        currentDestination: destination
      });
    });
  }

  render() {
    return (
      <div>

        <Header />
        <Container fluid>
          <Row>
            <MapNavigation  destinations={this.state.destinations}
                            fetchInfo={this.fetchInfo}
            />
            <MapContent destinations={this.state.destinations}
                        currentDestination={this.state.currentDestination}
            />
          </Row>
        </Container>
        <Footer />

      </div>
    );
  }
}

export default App;
