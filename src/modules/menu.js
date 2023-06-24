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

    const details = document.createElement('div');
    details.setAttribute('id', 'item-details');

    const itemName = document.createElement('h3');
    itemName.innerText = name;

    const itemDesc = document.createElement('p');
    itemDesc.innerText = text;

    const itemPrice = document.createElement('h4');
    itemPrice.innerText = price;

    details.appendChild(itemName);
    details.appendChild(itemDesc);

    item.appendChild(image);
    item.appendChild(details);
    item.appendChild(itemPrice);

    return item;
}
  
  function createBurgersSection() {

    const section = createMenuSection('menu-sec-1', 'Burgers');
  
    const burger1 = createMenuItems('Fiery Chicken', './imgs/burger1.png', 'A fiery, juicy chicken breast with crisp lettuce, tomato, and mayo, fulfilling your ultimate craving.', '179 INR');
    const burger2 = createMenuItems('Veggie Popper', './imgs/burger2.png', 'A delectable black bean patty infused with chickpeas, veggies, cheese, tomatoes, lettuce, and curry mayo on a premium bun.', '149 INR');
    const burger3 = createMenuItems('Cheeseburger Deluxe', './imgs/burger3.png', 'Fresh British beef topped with cheese, pickles, onions, tomatoes, crisp lettuce, ketchup, and mayo.', '249 INR');
    const burger4 = createMenuItems('Chicken Club', './imgs/burger4.png', 'Juicy chicken, bacon, avocado, lettuce, tomato, mayo on a toasted bun.', '199 INR');
  
    section.appendChild(burger1);
    section.appendChild(burger2);
    section.appendChild(burger3);
    section.appendChild(burger4);
  
    return section;
  }

  function createSidesSection() {
    const section = createMenuSection('menu-sec-2', 'Starters');
  
    const side1 = createMenuItems('Chili Cheese Fries', './imgs/side-1.png', 'Our natural-cut, skin-on, sea-salted fries topped our hearty chili and warm, creamy cheese sauce,  and shredded cheddar cheese', '149 INR');
    const side2 = createMenuItems('Chicken Nuggets', './imgs/side2.png', '8 Pieces of chicken fillet lightly breaded for a crispy outer, then fried to seal in the juicy goodness', '189 INR');
  
    section.appendChild(side1);
    section.appendChild(side2);
  
    return section;
  }
  
  function createDrinksSection() {
    const section = createMenuSection('menu-sec-3', 'Drinks');
  
    const drink1 = createMenuItems('Coke Zero', './imgs/drink1.png', 'The perfect diet companion to your burger, fries and everything nice. Regular serving size, 300 Ml.', '59 INR');
    const drink2 = createMenuItems('Mineral Water', './imgs/drink2.png', 'Water Bottle', '29 INR');
  
    section.appendChild(drink1);
    section.appendChild(drink2);
  
    return section;
  }
  

function loadMenu() {
    const main = document.getElementById('main');

    main.innerHTML = '';

    const header = document.createElement('div');
    header.setAttribute('id', 'menu-page-header');
    const headerText = document.createElement('h1');
    headerText.setAttribute('id', 'menu-header-text');
    headerText.innerText = 'Menu';
    header.appendChild(headerText)

    main.appendChild(header);
    main.appendChild(createBurgersSection());
    main.appendChild(createSidesSection());
    main.appendChild(createDrinksSection());
}

export default loadMenu;

