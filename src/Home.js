import  imageUrl  from "./ivan-torres-MQUqbmszGGM-unsplash.jpg";

export function homePage(parentElement){
    const div = document.createElement('div');
    div.id = 'homepage';

    const pizza = document.createElement('img');
    pizza.src = imageUrl;
    pizza.classList.add('pizzaImg');


    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('divParagraph');
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraphHome');
    paragraph.textContent = 'Welcome to Bella Italia Pizzeria, where every bite is a slice of heaven! At Bella Italia, we combine the finest ingredients with traditional recipes to bring you the authentic taste of Italy. Our menu features a variety of handcrafted pizzas, delicious pasta dishes, and fresh salads, all made to order with love and passion. Whether you are dining in, taking out, or ordering delivery, we promise a delightful experience that will keep you coming back for more. Join us today and savor the flavor of true Italian cuisine!';

    overlayDiv.appendChild(paragraph);
    div.appendChild(pizza);
    div.appendChild(overlayDiv);


    parentElement.appendChild(div);
}