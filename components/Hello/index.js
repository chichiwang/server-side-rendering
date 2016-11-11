import React, { Component, PropTypes } from 'react';
import env from '../../util/env';

class Hello extends Component {
  componentWillMount() {
    console.log(`Will Mount > Environemt: ${env}`); 
  }

  render() {
    return <div>Hello {this.props.name}</div>;
  }

  componentDidMount() {
    console.log(`Did Mount > Environment: ${env}`);
  }
}

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
