function createSection1 () {
    const section1 = document.createElement('div');
    section1.setAttribute('id', 'home-sec-1');

    const name = document.createElement('div');
    name.setAttribute('class', 'restaurant-name');

    const title = document.createElement('h1');
    title.setAttribute('id', 'title');
    title.innerText = 'Bulgar Scenes';

    name.appendChild(title);

    section1.appendChild(name);

    return section1;
}

function createSection2 () {
    const section2 = document.createElement('div');
    section2.setAttribute('id', 'home-sec-2');

    const review1 = document.createElement('div');
    review1.setAttribute('id', 'review-1');

    const img1 = document.createElement('img');
    img1.setAttribute('id', 'review-img-1');
    img1.setAttribute('src', '../imgs/review-1.jpg');

    const text1 = document.createElement('p');
    text1.setAttribute('id', 'review-text');
    text1.innerText = '" Unparalleled burger experience! Perfectly seasoned patties, fluffy buns, and irresistible toppings create a flavor explosion. The \'Bulgar Surprise\' sauce sets them apart. Excellent service, crispy fries, and creamy milkshakes complete the perfection."';

    review1.appendChild(img1);
    review1.appendChild(text1);

    const review2 = document.createElement('div');
    review2.setAttribute('id', 'review-2');

    const img2 = document.createElement('img');
    img2.setAttribute('id', 'review-img-2');
    img2.setAttribute('src', '../imgs/review-2.jpg');

    const text2 = document.createElement('p');
    text2.setAttribute('id', 'review-text');
    text2.innerText = '" Captivating ambience, culinary oasis! Happy cows, sizzling patties, and a mesmerizing atmosphere. Flavors and surroundings blend, creating an unforgettable experience."';

    review2.appendChild(img2);
    review2.appendChild(text2);

    section2.appendChild(review1);
    section2.appendChild(review2);

    return section2;
}

function createSection3 () {

    const section3 = document.createElement('div');
    section3.setAttribute('id', 'home-sec-3');

    const chefName = document.createElement('h2');
    chefName.setAttribute('id', 'chef-name');
    chefName.innerText = 'Chef Booger'

    const img = document.createElement('img');
    img.setAttribute('id', 'chef-img');
    img.setAttribute('src', '../imgs/chef-img.jpg');

    const text = document.createElement('p');
    text.setAttribute('id', 'chef-text');
    text.innerText = 'Meet Chef Booger, a boundary-pushing culinary genius specializing in bold and innovative Bulgarian cuisine. Prepare for an unforgettable gastronomic journey as he masterfully combines unexpected flavors, redefining traditional dishes with his tantalizing creations.';

    section3.appendChild(chefName);
    section3.appendChild(img);
    section3.appendChild(text);

    return section3;
}

function loadHome(){

    const main = document.getElementById('main');

    main.innerHTML = '';

    main.appendChild(createSection1());
    main.appendChild(createSection2());
    main.appendChild(createSection3());
}

export default loadHome;