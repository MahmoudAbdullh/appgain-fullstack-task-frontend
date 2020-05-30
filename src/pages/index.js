import Carousel from '../components/Carousel';
import Nav from '../components/nav';
import {Row, Col} from 'reactstrap'
import Link from 'next/link';
export default () => (
  <div>
      <Nav />
      <div className="container">
        <Carousel />
        <Row className="text-center mt-3">
          <Col>
            <h2>title</h2>
          </Col>
        </Row>

      </div>
  </div>
);
