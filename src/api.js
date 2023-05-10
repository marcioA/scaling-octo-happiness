const api_url = "http://localhost:3333/books";
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
}