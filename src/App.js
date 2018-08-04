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
      allDestinations: data.destinations,
      destinations: data.destinations,
      currentDestination: null,
      isOpen: false
    }

    // console.log("Apps - con - destinations.length: "+this.state.destinations.length);
  }

  showInfo = (destination) => {
    if(!this.state.currentDestination) {
      this.setState({
        isOpen: true,
        currentDestination: destination
      })
    }
    else {
      this.setState({
        isOpen: this.state.currentDestination.title !== destination.title || !this.state.isOpen,
        currentDestination: destination
      })
    }
  }

  toggleInfo = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  performSearch = (searchValue) => {
    let results = searchValue.trim() === '' ? this.state.allDestinations :
      _.chain(this.state.allDestinations)
      .filter(item => item.title.toLowerCase().includes(searchValue.trim().toLowerCase()))
      .sortBy('title')
      .value();

    // console.log("Apps - search - results:"+results.length);

    this.setState({
      destinations: results,
    });
  }

  fetchInfo = (destinationTitle) => {

    // console.log("Apps - fetchInfo: "+this.state.destinations.length);

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
        currentDestination: destination,
        isOpen: true
      });
    })
    .catch(error => {
      this.setState({
        currentDestination: destination,
        isOpen: true
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
                            search={this.performSearch}
            />
            <MapContent destinations={this.state.destinations}
                        currentDestination={this.state.currentDestination}
                        showInfo={this.showInfo}
                        toggleInfo={this.toggleInfo}
                        isOpen={this.state.isOpen}
            />
          </Row>
        </Container>
        <Footer />

      </div>
    );
  }
}

export default App;
