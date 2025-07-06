import fetchApi from "./fetch";
import printImages from "./printImages";

export default async function loadInitialState(){
    const data = await fetchApi('Gatos');
    printImages(data.results);
};