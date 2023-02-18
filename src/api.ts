


export const fetchNewAPI = (value: string) => fetch(

`https://newsapi.org/v2/everything?q=${value}&from=2023-01-17&sortBy=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}}`



).then((res) => res.json());


