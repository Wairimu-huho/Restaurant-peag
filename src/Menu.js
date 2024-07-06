import burgerImage from "./burger.jpg";
import pizzaImage from "./pizza.jpg";
import saladImage from "./salad.jpg";
import pastaImage from "./pasta.jpg";

export function menuPage(){
  
    console.log("menuPage function called");
    //menu items array
    const menuItems = [
        { name: "Burger", 
          description: "Juicy beef patty with lettuce and tomato", 
          price: 9.99,
          imageUrl:burgerImage
        },
        { name: "Pizza", 
          description: "Margherita with fresh mozzarella and basil", 
          price: 12.99,
          imageUrl: pizzaImage
        },
        { name: "Salad", 
          description: "Mixed greens with vinaigrette dressing", 
          price: 7.99,
          imageUrl: saladImage
         },
        { name: "Pasta", 
          description: "Spaghetti ", 
          price: 10.99,
          imageUrl: pastaImage
        }
    ];

    //function to create menu items
    function createMenuItem(item){
        const container = document.createElement("div");
        container.className = "menu-item";

        const detailsContainer = document.createElement("div");
        detailsContainer.className = "menu-item-details";
      
        const name = document.createElement("h2");
        name.textContent = item.name;
      
        const description = document.createElement("p");
        description.textContent = item.description;
      
        const price = document.createElement("span");
        price.className = "price";
        price.textContent = `$${item.price.toFixed(2)}`;
      
        detailsContainer.appendChild(name);
        detailsContainer.appendChild(description);
        detailsContainer.appendChild(price);

        const imageContainer = document.createElement("div");
        imageContainer.className = "menu-item-image";
    
        const image = document.createElement("img");
        image.src = item.imageUrl;
        image.alt = item.name;
    
        imageContainer.appendChild(image);
    
        container.appendChild(detailsContainer);
        container.appendChild(imageContainer);
      
        return container;
    }

    // Function to display menu
function displayMenu() {
    const content = document.getElementById('content');
    if (!content) {
        content = document.createElement('div');
        content.id = 'content';
    }

    const menuContainer = document.createElement('div');
    menuContainer.id = "menu-container";

    const menuHeading = document.createElement("h2");
    menuHeading.classList.add('menu-heading');
    menuHeading.textContent = "Our  Menu";
  
    menuContainer.appendChild(menuHeading);
    menuItems.forEach(item => {
      const menuItem = createMenuItem(item);
      menuContainer.appendChild(menuItem);
    });
    
    
    content.appendChild(menuContainer);

    document.body.appendChild(content);
  }
  

  // Call the function
  displayMenu();
}
    