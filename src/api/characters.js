export const getCharacters = async (page) => {
	const characters = await (
		await fetch(
			`https://rickandmortyapi.com/api/character?page=${page}`
		)
	).json();

	return characters.results.map((c) => ({
		...c,
		toggle: false,
		liked: false,
	}));
};

export const getEpisode = async (link) => {
	return await (await fetch(link)).json();
};
