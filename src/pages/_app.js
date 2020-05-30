import App from 'next/app'
import React from 'react';
import { Provider } from 'react-redux'
import { withRouter } from 'next/router';
import withReduxStore from '../store/with-redux-store'
import Head from '../components/head';

/**
 * styles
 */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/style/style.scss'
class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props;

        return (
            <div>
                <Provider store={reduxStore}>
                    <Head title="Home" />
                    <Component {...pageProps} />
                </Provider>
            </div>
        )
    }
}
/**

 */

export default withRouter(withReduxStore(MyApp))
