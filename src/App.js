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
      navbarCollapsed: false,
      isOpen: false,
    }
  }

  /**
    When a point of interest link or marker is clicked, information about the point of interest is fetched from Wikipedia
  */
  showInfo = (destinationTitle) => {

    let destination = this.getDestination(destinationTitle);

    WikipediaServiceAPI.getInfo(destination)
      .then(wikiData => {
        if(wikiData.extract) {
            destination.info = 'Wikipedia: "'+wikiData.extract+'"';
        }
        else {
          destination.info = "Wikipedia not available :( However, here's some info for you: "+destination.description;
        }
        this.setState({
          isOpen: true,
          currentDestination: destination,
          activeLink: destinationTitle
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  /**
    When a marker info box is closed, the selected link color reverts to default
  */
  toggleInfo = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      currentDestination: null
    })
  }

  toggleHeaderNav = () => {
    this.setState({
      navbarCollapsed: !this.state.navbarCollapsed
    });
  }

  /**
    Using lodash to search the list for the point of interest coresponding to 'title'
  */
  getDestination = (title) => {
    return _.find(data.destinations, {'title': title});
  }

  /**
    Using lodash to search the list for the points of interests containing the 'searchValue'
  */
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

        <Header toggleHeaderNav={this.toggleHeaderNav}
                navbarCollapsed={this.state.navbarCollapsed}
        />
        <Container fluid>
          <Row>
            <MapNavigation  destinations={this.state.destinations}
                            currentDestination={this.state.currentDestination}
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
