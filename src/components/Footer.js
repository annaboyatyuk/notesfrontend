import React, { Component } from 'react';

import '../../style/footer.scss';

export default class Footer extends Component {
  render() {
    return (
        <div className='footer'>

          <div className='green-box'></div>
          
          <ul className='footer-links'>
            <li><a href='https://github.com/annaboyatyuk'>github</a></li>
            <li><a href='https://www.linkedin.com/in/annaboyatyuk/'>linkedin</a></li>
            <li><a href='https://docs.google.com/document/d/12zJmUtfLgMKaffEZGh0zUUcQ84cy6Wmgz95aPjgN_Jo/edit?usp=sharing'>resume</a></li>
          </ul>

        </div>
    );
  }
}