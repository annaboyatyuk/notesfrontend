import React, { Component, Fragment } from 'react';

import '../../style/header.scss';

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className='header'>

          <div className='green-box'></div>
          
          <p>Take Note</p>

        </div>
      </Fragment>
    );
  }
}