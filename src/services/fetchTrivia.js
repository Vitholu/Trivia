export const TriviaData = ({ setQuestionsArray }) => {
	let data = fetch('https://the-trivia-api.com/api/questions?limit=6&region=US')
		.then((response) => response.json())
		.then((responseJSON) => setQuestionsArray((prev) => [...prev, ...responseJSON]));

	return data;
};
