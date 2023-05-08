const api_key = "2687e6b0903ab4ce56e0c22688207eda";
const api_url = "https://www.googleapis.com/books/v1/volumes?q=all";
const language = 'pt-BR';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${api_url}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'allBooks',
                title: 'Todos',
                items: await basicFetch(``)
            },
        ]
    },

    getMovieInfo: async (search, type) => {

    }
}