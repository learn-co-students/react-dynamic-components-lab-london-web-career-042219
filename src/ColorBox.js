import React, { Component } from 'react';

export default class ColorBox extends Component {
	
	render() {
		let opacity = parseFloat(this.props.opacity);
		if(opacity >= 0.2) {
			return (
				<div className="color-box" style={{opacity: this.props.opacity}}>
					<ColorBox opacity={opacity - 0.1} />
				</div>
			);
		} else {
			return null;
		}
	}
	
}
