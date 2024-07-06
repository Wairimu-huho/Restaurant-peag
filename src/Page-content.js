import  imageUrl  from "./logo.jpeg";
import { homePage } from "./Home"; // import the homePage function


export function initialisePage(){

    const content = document.createElement('div');
    content.id = 'content';
    content.style.backgroundColor = "black";

    const logo = document.createElement('img');
    logo.src = imageUrl;
    logo.classList.add('logo');

    const header = document.createElement('header');
    header.id = 'header';
    const nav = document.createElement('nav');
    nav.classList.add('navigation');

    const navLinks = document.createElement('ul');
    navLinks.classList.add('nav-links');
    navLinks.innerHTML = '<li><a id="Home" href="#">Home</a></li><li><a id="Menu" href="#">Menu</a></li><li><a id="About" href="#">About</a></li>';
  

    nav.appendChild(logo);
    nav.appendChild(navLinks);

    header.appendChild(nav);

    document.body.appendChild(header);
    

    document.body.appendChild(content);

    // Call the homePage function
    homePage(content);


}