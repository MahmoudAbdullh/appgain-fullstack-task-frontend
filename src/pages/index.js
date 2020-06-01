import React, {useEffect} from 'react'
import Carousel from '../components/Carousel';
import Nav from '../components/nav';
import {Row, Col} from 'reactstrap'
import {connect} from 'react-redux';
import {getInitialDataLayout} from '../store/Layout/actions';
const Index = ({Layout,getInitialDataLayout}) => {
  useEffect(() => {
    getInitialDataLayout()
  }, [])
  return (
  <div>
      <Nav />
      <div className="container">
        <Carousel
          items = {Layout.slides}
        />
        <Row className="text-center mt-3">
          <Col>
            <h2 style={{
              color: Layout.titleColor?Layout.titleColor: "",
              backgroundColor: Layout.titleBgColor?Layout.titleBgColor: ""
            }}>{Layout.title}</h2>
          </Col>
        </Row>
        <Row className="text-center my-3">
          <Col>
            <button className="btn btn-danger">
              CTA
            </button>
          </Col>
        </Row>

      </div>
  </div>
);
}
const mapStateToProps = (state) =>({
  Layout: state.Layout
})
export default connect(mapStateToProps,{getInitialDataLayout})(Index);
