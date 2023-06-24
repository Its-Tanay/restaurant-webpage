function createSection1 (){
    const section1 = document.createElement('div');
    section1.setAttribute('id', 'contact-sec-1');

    const title = document.createElement('h1');
    title.setAttribute('id', 'visit-us');
    title.innerText = 'Visit Us';

    section1.appendChild(title);

    return section1;
}

function createSection2 (){

    const section2 = document.createElement('div');
    section2.setAttribute('id', 'contact-sec-2');

        const card1 = createCard('Address');

            const cardText1 = document.createElement('div');
            cardText1.setAttribute('class', 'card-text');
            
                const line01 = document.createElement('p');
                line01.setAttribute('id', 'line01');
                line01.innerText = '123, Mock Street,';
                const line02 = document.createElement('p');
                line02.setAttribute('id', 'line02');
                line02.innerText = 'New Delhi, India';
                const line03 = document.createElement('p');
                line03.setAttribute('id', 'line03');
                line03.innerText = 'Pincode: 110001';

                cardText1.appendChild(line01);
                cardText1.appendChild(line02);
                cardText1.appendChild(line03);

            card1.appendChild(cardText1);

        const card2 = createCard('Timings');

            const cardText2 = document.createElement('div');
            cardText2.setAttribute('class', 'card-text');
            
                const line11 = document.createElement('p');
                line11.setAttribute('id', 'line11');
                line11.innerText = 'We are open';
                const line12 = document.createElement('p');
                line12.setAttribute('id', 'line12');
                line12.innerText = '24x7';

                cardText2.appendChild(line11);
                cardText2.appendChild(line12);

            card2.appendChild(cardText2);
    
        const card3 = createCard('Contact Us');

        const cardText3 = document.createElement('div');
        cardText3.setAttribute('class', 'card-text');
        
            const line21 = document.createElement('p');
            line21.setAttribute('id', 'line21');
            line21.innerText = '+91 98765 43210';
            const line22 = document.createElement('p');
            line22.setAttribute('id', 'line22');
            line22.innerText = '+91 11 1234 5678';
            const line23 = document.createElement('p');
            line23.setAttribute('id', 'line23');
            line23.innerText = 'bulgarscenes@fakemail.com';

            cardText3.appendChild(line21);
            cardText3.appendChild(line22);
            cardText3.appendChild(line23);
 
        card3.appendChild(cardText3);

    section2.appendChild(card1);
    section2.appendChild(card2);
    section2.appendChild(card3);

    return section2;
}

function createCard (text) {

    const card = document.createElement('div');
    card.setAttribute('id', 'card');

    const cardHeader = document.createElement('h2');
    cardHeader.setAttribute('class', 'card-header');
    cardHeader.innerText = text;

    card.appendChild(cardHeader);

    return card;
}

function loadContact () {
    const main = document.getElementById('main');

    main.innerHTML = '';

    main.appendChild(createSection1());
    main.appendChild(createSection2());
}

export default loadContact;