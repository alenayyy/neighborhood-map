import React, { Component } from 'react'
import { Container, Row } from 'reactstrap'

import Header from './Header'
import MapNavigation from './MapNavigation'
import MapContent from './MapContent'
import Footer from './Footer'

import _ from 'lodash'

import WikipediaServiceAPI from './WikipediaServiceAPI'
import data from './data.json'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      destinations: data.destinations,
      currentDestination: null,
      isOpen: false
    }
  }

  showInfo = (destinationTitle) => {

    let destination = this.getDestination(destinationTitle);    

    WikipediaServiceAPI.getInfo(destination)
      .then(wikiData => {
        if(wikiData.extract) {
            destination.description = 'Wikipedia: "'+wikiData.extract+'"';
        }
        this.setState({
          isOpen: true,
          currentDestination: destination
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggleInfo = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  getDestination = (title) => {
    return _.find(data.destinations, {'title': title});
  }

  performSearch = (searchValue) => {
    let results = searchValue.trim() === '' ? data.destinations :
      _.chain(data.destinations)
      .filter(item => item.title.toLowerCase().includes(searchValue.trim().toLowerCase()))
      .sortBy('title')
      .value();

    this.setState({
      destinations: results
    });
  }

  render() {
    return (
      <div>

        <Header />
        <Container fluid>
          <Row>
            <MapNavigation  destinations={this.state.destinations}
                            showInfo={this.showInfo}
                            search={this.performSearch}
            />
            <MapContent destinations={this.state.destinations}
                        currentDestination={this.state.currentDestination}
                        showInfo={this.showInfo}
                        toggleInfo={this.toggleInfo}
            />
          </Row>
        </Container>
        <Footer />

      </div>
    );
  }
}

export default App;
