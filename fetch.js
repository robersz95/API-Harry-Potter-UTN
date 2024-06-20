const $main = document.querySelector('.grid');

fetch('https://hp-api.onrender.com/api/characters')
    .then((respuesta) => respuesta.json())
    .then((data) => {
        console.log(data);
        data.forEach((personaje) => {
            $main.innerHTML += `
                <div class="personaje-card">
                    <h4>${personaje.name}</h4>
                    <img src="${personaje.image}", width= "200px"alt="imagen de ${personaje.name}">
                    <p>Gender: ${personaje.gender}</p>
                    <p>Specie: ${personaje.species}</p>
                    <p>Status: ${personaje.status}</p>
                </div>
            `;
        });
    });

