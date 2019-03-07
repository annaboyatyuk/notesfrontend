import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import createAppStore from '../store/store.js';
import Dashboard from './Dashboard.js';
import Header from './Header.js';
import Footer from './Footer.js';

import '../../style/sanitize.scss';
import '../../style/style.scss';

const store = createAppStore();

export default class App extends Component {
  render() {
    return (

<React.Fragment>
          <div className='main-body'>
          
          <Header />

          <div className='main-stuff'>

            
      <Provider store={store}>
        <BrowserRouter>

          <Route exact path='/' component={Dashboard} />

        </BrowserRouter>
      </Provider>

          
          </div>

          <Footer />
        </div>
      </React.Fragment>



    );
  }
}
