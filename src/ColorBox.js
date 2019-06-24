import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {

    const displayMore = this.props.opacity > 0.2 ? true : false;
    const newOpacity = this.props.opacity - 0.1;

    if (displayMore) {
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
             <ColorBox opacity={newOpacity} />
        </div>
      )
    } else {
      return null;
    }
  }
  
}
