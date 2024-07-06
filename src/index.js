import './style.css';
import { initialisePage} from "./Page-content";
import {homePage } from "./Home";
import { menuPage } from "./Menu";
import {aboutPage } from "./About";

document.addEventListener('DOMContentLoaded', () => {
    initialisePage();

    console.log('index');

    const homeButton = document.getElementById('Home');
    const aboutButton = document.getElementById('About');
    const menuButton = document.getElementById('Menu');

    homeButton.addEventListener('click', () => {
        switchTab('Home');
    });

    aboutButton.addEventListener('click' , () => {
        switchTab('About');
    });
    
    menuButton.addEventListener('click', () => {
        switchTab('Menu');
    });

});

function switchTab(tabName){

    if (tabName === 'Home') {
        clearContent();
        homePage(content);
    } else if (tabName === 'About') {
        clearContent();
        aboutPage();
    } else if (tabName === 'Menu') {
        clearContent();
        menuPage();
    }
}

function clearContent() {
     const content = document.getElementById('content');
     content.innerHTML = '';
}
