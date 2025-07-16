const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export default async function fetchApi(query = 'gatos'){

    try{
        const response = await fetch(`${API_URL}/?query=${query}&per_page=30&client_id=${API_KEY}`);
        const res = await response.json();
        console.log(res);

        if(!res.results || res.results.length === 0){
            console.warn(`No se encontraron resultados para "${query}". Mostrando gatos.`);
            alert(`No se encontraron resultados para "${query}". Mostrando gatos.`);
            const fallbackResponse = await fetch(`${url}/?query=gatos&per_page=30&client_id=${API_KEY}`);
            const fallbackRes = await fallbackResponse.json();

            return fallbackRes.results;
        }

        return res.results;

    } catch(error){
        console.log('Error generando images', error);
        return [];
    }
    }