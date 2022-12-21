let key = '60fb17cd30b4d4813af2ddaf5c11022e'

let requests = {

    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,

    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,

    requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,

    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,

    requestLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`


};
export default requests