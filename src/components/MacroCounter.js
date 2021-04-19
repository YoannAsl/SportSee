import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 258px;
	height: 124px;
	border-radius: 5px;
	background-color: #fbfbfb;
	padding: 32px;
`;

const Icon = styled.div`
	height: 60px;
	width: 60px;
	border-radius: 6px;
	background-color: ${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default function MacroCounter(props) {
	const { image, color, alt } = props;

	return (
		<Container>
			<Icon color={color}>
				<img src={image} alt={alt} />
			</Icon>
		</Container>
	);
}
