import React from 'react';

export default function CardInfo(props) {
	return (
		<div className="info">
			<span>{props.title}</span>
			<p>{props.value}</p>
		</div>
	);
}
