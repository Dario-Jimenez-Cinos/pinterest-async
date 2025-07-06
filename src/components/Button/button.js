import "./button.scss";

export const Button = ({text, fnc = () => {}, type, className, size = 'm'}) => {
    const button = document.createElement("button");

    button.classList.add("common_button", type, className, size);
    button.textContent = text;
    button.addEventListener("click", fnc);

    return button;
} 