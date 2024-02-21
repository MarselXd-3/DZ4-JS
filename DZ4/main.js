function fetchPersons() {
    fetch('persons.json')
      .then(response => response.json())
      .then(data => {

        data.forEach(person => {
          const card = document.createElement('div');
          card.classList.add('card');

          const img = document.createElement('img');
          img.src = person.person_photo;
          img.alt = person.name;

          const name = document.createElement('h2');
          name.textContent = person.name;

          const age = document.createElement('p');
          age.textContent = `Age: ${person.age}`;

          const occupation = document.createElement('p');
          occupation.textContent = `Occupation: ${person.occupation}`;

          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(age);
          card.appendChild(occupation);

          document.getElementById('personsContainer').appendChild(card);
        });
      })
      .catch(error => console.error('Error fetching persons:', error));
  }


  window.onload = fetchPersons;