import { Header } from "./components/Header/header";
import Home from './components/Home/home';
import printImages from './components/Utils/printImages';
import "./styles.scss";

const body = document.querySelector('body');

body.append(Header(),Home());
document.addEventListener('DOMContentLoaded', () => {
    printImages("gatos");
  });