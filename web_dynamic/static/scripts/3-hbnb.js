document.addEventListener('DOMContentLoaded', function() {
    fetch('http://0.0.0.0:5001/api/v1/places_search/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
    })
    .then(response => response.json())
    .then(data => {
        const placesSection = document.querySelector('section.places');
        data.forEach(place => {
            const article = document.createElement('article');
            
            const titleBox = document.createElement('div');
            titleBox.className = 'title_box';
            const name = document.createElement('h2');
            name.innerText = place.name;
            const price = document.createElement('div');
            price.className = 'price_by_night';
            price.innerText = `$${place.price_by_night}`;
            titleBox.appendChild(name);
            titleBox.appendChild(price);

            const information = document.createElement('div');
            information.className = 'information';
            const maxGuest = document.createElement('div');
            maxGuest.className = 'max_guest';
            maxGuest.innerText = `${place.max_guest} Guest(s)`;
            const numRooms = document.createElement('div');
            numRooms.className = 'number_rooms';
            numRooms.innerText = `${place.number_rooms} Bedroom(s)`;
            const numBathrooms = document.createElement('div');
            numBathrooms.className = 'number_bathrooms';
            numBathrooms.innerText = `${place.number_bathrooms} Bathroom(s)`;
            information.appendChild(maxGuest);
            information.appendChild(numRooms);
            information.appendChild(numBathrooms);

            const description = document.createElement('div');
            description.className = 'description';
            description.innerHTML = place.description;

            article.appendChild(titleBox);
            article.appendChild(information);
            article.appendChild(description);

            placesSection.appendChild(article);
        });
    })
    .catch(error => console.error('Error:', error));
});

