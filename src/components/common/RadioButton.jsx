import React from 'react';

export default function RadioButton(props) {
	return (
		<div className="radio-button">
			<input
				type="radio"
				name="characters"
				id={props.value}
				value={props.value}
				checked={props.checked === props.value}
				onChange={props.handleChange}
			/>
			<label htmlFor={props.value}>{props.label}</label>
		</div>
	);
}
