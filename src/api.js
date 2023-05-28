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

    postBook: async (bookData) => {
        var myHeaders = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        var myInit = {
            method: 'POST',
            headers: myHeaders,
            // mode: 'cors',
            // cache: 'default',
            body: JSON.stringify(bookData)
        };
        const req = await fetch(`${api_url}`, myInit);

        return req;
    }
}