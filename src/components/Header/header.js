import { Button } from "../Button/button";
import printImages from '../Utils/printImages';
import "./header.scss";

export const Header = () => {
    const header = document.createElement("header");

    const logo = document.createElement("img");
    logo.classList.add('logo');
    logo.src = "public/Assets/Pinterest-logo.png";


    const searchInput = document.createElement("input");
    searchInput.className = 'search-input';
    searchInput.id = 'search-input';
    searchInput.placeholder = "   🔎 Buscar";

    const msg = document.createElement("img");
    msg.src = "public/Assets/Message-icon-grey.png";
    msg.classList.add('msg-icon');

    const notifications = document.createElement("img");
    notifications.src = "public/Assets/bell-grise.png";
    notifications.classList.add('notifications-icon');

    const profile = document.createElement("img");
    profile.src = "public/Assets/profile-icon-design-free-vector.jpg";
    profile.classList.add('profile-icon');

    header.append(
        logo,
        Button({text: "Inicio", type: "secondary", fnc: () => {printImages('gatos')}, className: 'inicio-button'}),
        Button({text: "Explorar", className: 'explorar-button'}),
        Button({text: "Crear", className: 'crear-button'}),
        searchInput, 
        notifications,
        msg,
        profile
        );

        searchInput.addEventListener('keydown', async (e) => {
            if(e.key === 'Enter'){
                await printImages(e.target.value);
                e.target.value = '';
            }
        })

        logo.addEventListener('click', () => {
            printImages('gatos');
        })
    
    return header;
}