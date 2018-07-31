import React, {Component} from 'react'

import { Container, Row, Col } from 'reactstrap'

class Footer extends Component {
  render() {
    return (
      <Container fluid className="footer">
        <Row>
          <Col className="text-center">
            <p className="content">&copy; Elena Nicolae - 2018<br />All rights reserved</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
