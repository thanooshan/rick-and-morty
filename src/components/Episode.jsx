import React, { useState, useEffect } from 'react';
import { getEpisode } from '../api/characters';

export default function Episode(props) {
	const [episode, setEpisode] = useState([]);

	useEffect(() => {
		const loadEpisode = async () => {
			setEpisode(await getEpisode(props.link));
		};

		loadEpisode();
	}, []);

	return <li>{episode.name}</li>;
}
