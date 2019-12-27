import React from 'react';
import './Container.css';
import Images from './images';

class Container extends React.Component {
  render() {
    return (
      <div className="container">
        <Images />
      </div>
    );
  }
}

export default Container;