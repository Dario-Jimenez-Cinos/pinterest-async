import Card from "../Card/card";
import fetchApi from "./fetch";

export default async function printImages(query){
    const imagesContainer = document.querySelector('.images-container')
    if(imagesContainer) imagesContainer.innerHTML = '';

    try{
        const result = await fetchApi(query);

        result.forEach(image => {
            const newCard = Card(image);
            imagesContainer.append(newCard);
        });
    }catch(error){
        console.log(error);
    }

}
