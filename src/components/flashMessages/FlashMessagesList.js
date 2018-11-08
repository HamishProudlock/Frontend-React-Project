import React, { Component } from 'react';
import { connect } from 'react-redux';

import FlashMessage from './FlashMessage';

class FlashMessagesList extends Component {
  render() {
    const messages = this.props.messages.map(message =>
      <FlashMessage key={message.id} message={message} />
    )
    return(
      <div>{messages}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.flashMessages
  }
}

export default connect(mapStateToProps)(FlashMessagesList);
