import React, { Component } from 'react';

import './FlashMessages.css';

class FlashMessage extends Component {
  render() {
    const { id, type, text } = this.props.message;
    let alert = (type==='error') ?  'Flash error' : 'Flash';
    return(
      <div className={alert}>
        <span>
          <h1>{text}</h1>
          <button className="close"><span>&times;</span></button>
        </span>
      </div>
    )
  }
}

export default FlashMessage
