function createMenuSection(id, text){

    const menuSection = document.createElement('div');
    menuSection.setAttribute('id', id);
    
    const header = document.createElement('h2');
    header.setAttribute('class', 'section-header');
    header.innerText = text;

    menuSection.appendChild(header);

    return menuSection;
}

function createMenuItems(name, link, text, price) {

    const item = document.createElement('div');
    item.setAttribute('id','item');

    const image = document.createElement('img');
    image.setAttribute('src', link);

    const itemName = document.createElement('h3');
    itemName.innerText = name;

    const itemDesc = document.createElement('p');
    itemDesc.innerText = text;

    const itemPrice = document.createElement('h4');
    itemPrice.innerText = price;

    item.appendChild(image);
    item.appendChild(itemName);
    item.appendChild(itemDesc);
    item.appendChild(itemPrice);

    return item;
}

function createStartersSection() {
    const section = createMenuSection('menu-sec-1', 'Starters');
  
    const starter1 = createMenuItems('starter1', '#', 'text1', 'price1');
    const starter2 = createMenuItems('starter2', '#', 'text2', 'price2');
  
    section.appendChild(starter1);
    section.appendChild(starter2);
  
    return section;
  }
  
  function createMainCourseSection() {
    const section = createMenuSection('menu-sec-2', 'Main Course');
  
    const main1 = createMenuItems('main1', '#', 'text1', 'price1');
    const main2 = createMenuItems('main2', '#', 'text2', 'price2');
  
    section.appendChild(main1);
    section.appendChild(main2);
  
    return section;
  }
  
  function createDrinksSection() {
    const section = createMenuSection('menu-sec-3', 'Drinks');
  
    const drink1 = createMenuItems('drink1', '#', 'text1', 'price1');
    const drink2 = createMenuItems('drink2', '#', 'text2', 'price2');
  
    section.appendChild(drink1);
    section.appendChild(drink2);
  
    return section;
  }
  
  function createDessertsSection() {
    const section = createMenuSection('menu-sec-4', 'Desserts');
  
    const dessert1 = createMenuItems('dessert1', '#', 'text1', 'price1');
    const dessert2 = createMenuItems('dessert2', '#', 'text2', 'price2');
  
    section.appendChild(dessert1);
    section.appendChild(dessert2);
  
    return section;
  }
  
  function createMenu() {
    const sections = {
      firstSection: createStartersSection(),
      secondSection: createMainCourseSection(),
      thirdSection: createDrinksSection(),
      fourthSection: createDessertsSection(),
    };
  
    return sections;
  }  

function loadMenu() {
    const main = document.getElementById('main');

    main.innerHTML = '';

    main.appendChild(createStartersSection());
    main.appendChild(createMainCourseSection());
    main.appendChild(createDrinksSection());
    main.appendChild(createDessertsSection());
}

export default loadMenu;

