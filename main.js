const inputEl = document.querySelector(".search-input");
const buttonEl = document.querySelector(".search-button");
const results = document.querySelector(".results");


const searchCharacter = e => {
    e.preventDefault();
    const inputValue = inputEl.value;
    if(inputValue) {
        fetch(`https://swapi.co/api/people/?search=${inputValue}`)
            .then(res => res.json())
            .then(res => {
                results.innerHTML = '';
                const result = document.createElement("div");
                result.className = "found-character"
                const charactersList = res.results.length;
                for (let i = 0; i < charactersList; i++) {
                    const character = document.createElement("div");
                    character.innerHTML = `
                    <p>Name: ${res.results[i].name}</p>
                    <p>Date of birth: ${res.results[i].birth_year}</p>
                    <p>Gender: ${res.results[i].gender}</p>
                    <p>Height: ${res.results[i].height}</p>
                    <p>Eye color: ${res.results[i].eye_color}</p>
                    <p>Hair color: ${res.results[i].hair_color}</p>
                    `;
                    result.appendChild(character);
                };
                results.appendChild(result);
            })
            .catch(err => {
                console.log("Something went wrong");
            });
    };
};

const addSearchListener = () => {
    buttonEl.addEventListener("click", searchCharacter);
}

addSearchListener();