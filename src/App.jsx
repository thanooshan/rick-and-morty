import { useState, useEffect } from 'react';
import { getCharacters } from './api/characters';
import Card from './components/Card';
import RadioButton from './components/common/RadioButton';

function App() {
	const [filters, setFilters] = useState({
		characters: 'all',
	});
	const [allCharacters, setAllCharacters] = useState([]);
	const filteredCharacters =
		filters.characters !== 'all'
			? allCharacters.filter((c) => c.liked == true)
			: allCharacters;
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(true);

	//show/hide character's episode
	const switchToggle = (id) => {
		setAllCharacters((prevCharacters) => {
			return prevCharacters.map((character) => {
				return character.id === id
					? { ...character, toggle: !character.toggle }
					: { ...character, toggle: false };
			});
		});
	};

	//load the characters
	useEffect(() => {
		const loadCharacters = async () => {
			setLoading(true);
			const newCharacters = await getCharacters(page);
			setAllCharacters((prevCharacters) => [...newCharacters]);
			setLoading(false);
		};

		loadCharacters();
	}, [page]);

	//filter toggle function
	const handleFilter = (element) => {
		const { name, value } = element.target;

		setFilters((prevFilter) => ({
			...prevFilter,
			[name]: value,
		}));
	};

	//favourite toggle function
	const handleFavourite = (id) => {
		setAllCharacters((prevCharacters) => {
			return prevCharacters.map((character) => {
				return character.id === id
					? { ...character, liked: !character.liked }
					: character;
			});
		});
	};

	return (
		<div className="App">
			<div className="hero-area">
				<div className="container">
					<h1 className="hero--text">
						The Rick and Morty <br /> Characters!
					</h1>
					<form action="">
						<div className="radio-group">
							<RadioButton
								name="characters"
								value="all"
								label="Display All"
								checked={filters.characters}
								handleChange={handleFilter}
							/>
							<RadioButton
								name="characters"
								value="favourite"
								label="Favourite"
								checked={filters.characters}
								handleChange={handleFilter}
							/>
						</div>
					</form>
				</div>
			</div>
			<div className="bottom-area">
				<div className="container">
					{loading && (
						<h4 className="white text-center">
							Loading...
						</h4>
					)}
					<div className="cards">
						{filteredCharacters.length > 0 ? (
							filteredCharacters.map((character) => (
								<Card
									key={character.id}
									{...character}
									handleToggle={switchToggle}
									handleFavourite={handleFavourite}
								/>
							))
						) : (
							<h2 className="white text-center">
								There are no data!
							</h2>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
