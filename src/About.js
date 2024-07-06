import backDrop from './backdrop.jpg';
export function aboutPage(){
    const content = document.getElementById('content');
    const div = document.createElement('div');
    div.classList.add("about-page");
    
    content.appendChild(div);

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    div.appendChild(aboutContainer);

    const backdrop = document.createElement('img');
    backdrop.src = backDrop;
    backdrop.classList.add("about-img");
    aboutContainer.appendChild(backdrop);

    const aboutContent = document.createElement("div");
    aboutContent.className = "about-content";
    aboutContainer.appendChild(aboutContent);

    const aboutHeading = document.createElement("h2");
    aboutHeading.classList.add("about-heading");
    aboutHeading.textContent = "About Us";
    aboutContent.appendChild(aboutHeading);

    const aboutParagraph = document.createElement("p");
    aboutParagraph.classList.add("about-paragraph");
    aboutParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ipsum nunc aliquet bibendum enim facilisis gravida neque. Varius quam quisque id diam vel quam. Nisi porta lorem mollis aliquam ut porttitor leo.Ut sem viverra aliquet eget sit. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Id diam vel quam elementum. Eu ultrices vitae auctor eu augue ut lectus arcu. In eu mi bibendum neque egestas congue quisque. Nam at lectus urna duis convallis convallis tellus. Elit at imperdiet dui accumsan. Luctus venenatis lectus magna fringilla urna. Sodales ut eu sem integer vitae. Turpis massa tincidunt dui ut ornare lectus. Vel facilisis volutpat est velit egestas dui id ornare arcu. Amet luctus venenatis lectus magna fringilla urna.";
    aboutContent.appendChild(aboutParagraph);
    document.appendChild(content);
}