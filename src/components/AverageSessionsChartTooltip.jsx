import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CustomTooltip = styled.div`
	font-weight: 500;
	font-size: 10px;
	color: black;
	background-color: white;
	padding: 4px 7px;
`;

export default function AverageSessionsChartTooltip({ active, payload }) {
	if (active) {
		return <CustomTooltip>{payload[0].value} min</CustomTooltip>;
	}
	return null;
}

AverageSessionsChartTooltip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};
