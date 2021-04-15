import React from 'react';
import styled from 'styled-components';

const CustomTooltip = styled.div`
	font-weight: 500;
	font-size: 10px;
	color: black;
	background-color: white;
	padding: 4px 7px;
`;

export default function AverageSessionsChartTooltip(props) {
	if (props.active) {
		return <CustomTooltip>{props.payload[0].value} min</CustomTooltip>;
	}
	return null;
}
