import { Button } from '../Button/button';
import randomColor from '../Utils/randomColor';
import './card.scss';

export default function Card(imageData){
    const cardContainer = document.createElement('li');
    cardContainer.className = 'card';

    const image = document.createElement('img');
    image.src = imageData.urls.small;
    image.classList.add('card-image');

    const ownerImage = document.createElement('img');
    ownerImage.classList.add('owner-image');
    ownerImage.src = imageData.user.profile_image.medium;
    ownerImage.addEventListener('click',() => {window.location.href = imageData.user.links.html});

    const borderColor = randomColor();
    ownerImage.style.border = `6px solid ${borderColor}`;

    const ownerName = document.createElement('p');
    ownerName.classList.add('owner-name');
    ownerName.textContent = `${imageData.user.first_name} ${imageData.user.last_name}`;

    const totalPhotos = document.createElement('p');
    totalPhotos.classList.add('total-photos');
    totalPhotos.innerHTML = `📷<br>+${imageData.user.total_photos}`;

    const likes = document.createElement('p');
    likes.className = 'card-likes';
    likes.innerHTML = `❤️ <br>${imageData.likes}`

    const uploadDate = document.createElement('p');
    const dateTimeString = imageData.created_at;
    const dateOnly = new Date(dateTimeString).toISOString().split("T")[0];
    uploadDate.textContent = `⬆️ ${dateOnly}`;
    uploadDate.classList.add('upload-date');

    cardContainer.append(image,totalPhotos, likes, ownerImage, ownerName, uploadDate,
        Button({size: 's',text: 'Visitar', type: 'red', className:'visitar-button',
            fnc: () => {
                window.location.href = imageData.links.html;
            }
        })
    );

    return cardContainer;
}