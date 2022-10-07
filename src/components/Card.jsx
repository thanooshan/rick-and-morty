import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import CardInfo from './common/CardInfo';
import Episode from './Episode';

export default function card(props) {
	const {
		id,
		name,
		image,
		status,
		species,
		gender,
		location,
		episode,
		toggle,
		handleToggle,
		handleFavourite,
		liked,
	} = props;

	return (
		<div className="card">
			<div className="card--top">
				<FontAwesomeIcon
					icon={faStar}
					size="lg"
					className={`star ${liked && 'liked'}`}
					onClick={() => handleFavourite(id)}
				/>
				<figure>
					<img src={image} alt={name} />
				</figure>
				<div className="card--details">
					<div className="card--details--group">
						<div className="info">
							<h3>{name}</h3>
							<p>
								<span
									className={`status--icon ${status.toLowerCase()}`}
								></span>
								<span className="capitalize white">
									{status}
								</span>
								- {species}
							</p>
						</div>
						<CardInfo title="Gender:" value={gender} />
						<CardInfo
							title="Last known location:"
							value={location.name}
						/>
					</div>

					<span
						className="cta cta--fill cta--rounded"
						onClick={(event) => handleToggle(id)}
					>
						{toggle ? 'Less' : 'More'}
					</span>
				</div>
			</div>
			<div className={`card--bottom ${toggle && 'show'}`}>
				<h3>Episodes</h3>
				<ul>
					{episode.slice(0, 3).map((e) => (
						<Episode key={e} link={e} />
					))}
				</ul>
			</div>
		</div>
	);
}
