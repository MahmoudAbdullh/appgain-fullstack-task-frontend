import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Row, Col} from 'reactstrap';

/**
 * component
 */
import PreviewNav from './PreviewNav';
import Carousel from '../Carousel';
class Preview extends Component {
    render() {
        const {preview} = this.props;
        return (
            <div>
                <PreviewNav
                    preview = {preview}
                />
                <div className="container">
                    <Carousel
                        items = {preview.slides}
                    />
                    <Row className="text-center mt-3">
                        <Col>
                            <h2 style={{
                            color: preview.titleColor?preview.titleColor: "",
                            backgroundColor: preview.titleBgColor?preview.titleBgColor: ""
                            }}>{preview.title}</h2>
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
        )
    }
}

const mapStateToProps = (state) =>({
    preview: state.Layout.preview
})
export default connect(mapStateToProps,{  })(Preview);