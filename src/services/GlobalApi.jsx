import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "0a278a00db19d0a720e3462ae33b6c07";

// 'https://api.themoviedb.org/3/trending/movie/day?language=en-US

const getTrendingVideos = axios.get(
	`${movieBaseUrl}/trending/movie/day?api_key=${api_key}`
);

export default {
	getTrendingVideos,
};
