import React from 'react';
import './CustomTooltip.css';

export default function CustomTooltip(props) {
	if (props.active) {
		return <div className='line-tooltip'>{props.payload[0].value} min</div>;
	}
	return null;
}
