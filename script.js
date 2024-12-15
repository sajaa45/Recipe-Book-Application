document.addEventListener('DOMContentLoaded', function() {
const plates = [
    { id: 1, name: 'Pad Kra Prow',
     description: 'Sauteed with garlic, onion, bell pepper, chili and basil leaves.' 
     ,price: '$10.99', image: 'img1.jpg' },
    { id: 2, name: 'Macaroni Kee Mao', 
    description:'Stir Fried macaroni with egg, garlic, chili, onion, tomato, bell pepper, broccoli and basil leaves.' ,
    price: '$19.99', image: 'img2.jpg' },
    { id: 3, name: ' Pad Pak (Mixed Vegetable)',
    description:'Sauteed with broccoli, baby corn, carrot, mushroom, napa cabbage, string bean and brown sauce.' ,
    price: '$14.99', image: 'img3.jpg' },
    { id: 4, name: 'Golden Triangle (Fried Tofu)', 
    description: 'Deep fried bean curd served with sweet and sour sauce and ground peanuts.' ,
    price: '$7.95', image: 'img4.jpg' },
    { id: 5, name: 'Thai Dumpling', 
    description:'Steamed wontons stuffed with crab meat, ground pork, shrimp and chicken served with sweet black sauce.' ,
    price: '$9.95', image: 'img5.jpg' },
];

function displayProducts() {
    const menu = document.getElementById('plate');

    plates.forEach(plate => {
        const m = document.createElement('div');
        m.classList.add('mm');
        m.innerHTML = `
        <img src="${plate.image}" alt="${plate.name}">
        <h3>${plate.name}</h3>
        <p>${plate.description}</p>
        <p>${plate.price}</p>
        `;
        menu.appendChild(m);
    });}
displayProducts();

     const reservationForm = document.getElementById('reservation-form');
    const reservationDetails = document.getElementById('reservation-details');
    const cancelReservationButton = document.getElementById('cancel-reservation');

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;

        if (date && time && guests && firstName && lastName) {
            displayReservationDetails(date, time, guests, firstName, lastName);
            cancelReservationButton.style.display = 'block';
            alert('Reservation Confirmed');
        } else {
            alert('Please fill in all fields.');
        }
    });

    cancelReservationButton.addEventListener('click', function () {
        clearReservationDetails();
        cancelReservationButton.style.display = 'none';
        reservationForm.reset();
    });

    function displayReservationDetails(date, time, guests, firstName, lastName) {
        console.log('Displaying reservation details...');
        console.log('Date:', date);
        console.log('Time:', time);
        console.log('Guests:', guests);
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);

        reservationDetails.innerHTML = `
            <p>Reservation Details:</p>
            <p>Reservation for: ${firstName} ${lastName}</p>
            <p>Date: ${date}</p>
            <p>Time: ${time}</p>
            <p>Number of Guests: ${guests}</p>
        `;
    }

    function clearReservationDetails() {
        reservationDetails.innerHTML = '';
    }
});