function createHeader (){
    const nav = document.createElement('div');
    nav.setAttribute('class', 'header-nav');

    nav.appendChild(createNavbtn('navbtn1', 'home-btn', 'Home'));
    nav.appendChild(createNavbtn('navbtn2', 'menu-btn', 'Menu'));
    nav.appendChild(createNavbtn('navbtn3', 'contact-btn', 'Contact'));

    return nav;
}

function createNavbtn(name, id, text, link) {
    name = document.createElement('button');
    name.setAttribute('id', id);
    name.innerText = text;
    return name;
}

function createMain (){
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    return main;
}

function createFooter (){
    const footer = document.createElement('footer');

    const footerText = document.createElement('p');
    footerText.setAttribute('id', 'footer-text');
    footerText.innerText = 'Made by';

    const gitlink = document.createElement('a');
    gitlink.setAttribute('id', 'git-link');
    gitlink.setAttribute('href', 'https://github.com/Its-Tanay');
    gitlink.innerText = '@Its-Tanay';

    const credits = document.createElement('a');
    credits.setAttribute('id', 'credit-text');
    credits.innerText = 'Credits for used images in the README file';

    footerText.appendChild(gitlink);
    footer.appendChild(footerText);
    footer.appendChild(credits);

    return footer;
}

function loadPage (){

    const content = document.getElementById('content');

    content.appendChild(createHeader());

    content.appendChild(createMain());

    content.appendChild(createFooter());

}

export default loadPage;