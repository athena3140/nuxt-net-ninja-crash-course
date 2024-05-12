export default defineEventHandler(async (event) => {
	//handle query params
	// const { name } = getQuery(event);

	//handle post data
	// const { age } = await readBody(event);

	//api call with private keys
	const { data } = await $fetch(
		"https://api.currencyapi.com/v3/latest?apikey=cur_live_mr8rzT3PG0h1yp4us3vyL6EdnyZa7gTkhLdx3f7w"
	);

	return data;
	// return {
	// 	message: `Hello ${age} years old ${name}!`,
	// };
});
