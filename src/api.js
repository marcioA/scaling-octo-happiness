const api_key = "2687e6b0903ab4ce56e0c22688207eda";
const api_url = "https://api.themoviedb.org/3";
const language = 'pt-BR';

const basicFetch = async (endpoint) =>{
    const req = await fetch(`${api_url}${endpoint}language=${language}&api_key=${api_key}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async ()=> {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_networks=213&`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch(`/trending/all/week?`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?`)
            },
            {
                slug: 'action',
                title: 'Filmes de ação',
                items: await basicFetch(`/discover/movie?with_genres=28&`)
            },
            {
                slug: 'coemdy',
                title: 'Filmes de comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&`)
            },
            {
                slug: 'horror',
                title: 'Filmes de terror',
                items: await basicFetch(`/discover/movie?with_genres=27&`)
            },
            {
                slug: 'romance',
                title: 'Filmes de romance',
                items: await basicFetch(`/discover/movie?with_genres=10749&`)
            },
            {
                slug: 'documentary',
                title: 'Filmes de documentários',
                items: await basicFetch(`/discover/movie?with_genres=99&`)
            },
        ]
    },

    getMovieInfo: async (movieId, type)=>{
        const result = {};

        if(movieId){
            if(type === 'movie'){
                result.info = await basicFetch(`/movie/${movieId}?`)
            }else if(type === 'tv'){
                result.info = await basicFetch(`/tv/${movieId}?`)
            }
        }

        return result;
    }
}