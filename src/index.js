import loadHome from "./modules/home";
import loadPage from "./modules/loadpage";
import loadMenu from "./modules/menu";
import loadContact from "./modules/contact";

run();

function navClicks (){
    const homebtn = document.getElementById('home-btn');
    const menubtn = document.getElementById('menu-btn');
    const contactbtn = document.getElementById('contact-btn');

    homebtn.addEventListener("click", loadHome);
    menubtn.addEventListener("click", loadMenu);
    contactbtn.addEventListener("click", loadContact);
}

function run(){
    loadPage();
    loadHome();
    navClicks();
}
