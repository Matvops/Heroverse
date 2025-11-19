import { ApiMain } from "./ApiMain.js";



window.addEventListener('load', () => {

    let cards = [];
    let input = '';
    const listHeroes = document.querySelector('#list-heroes');
    const search = document.querySelector('#search');
    const home = document.querySelector('#home');
    const api = new ApiMain();
    let heroes = new Array();
   

    async function createCardsHeroes() {

        heroes = heroes.length === 0 ? await api.getAll() : heroes;
        
        heroes.forEach(hero => {

            const heroData = {
                name: hero.name,
                image: hero.images.sm   ,
                race: hero.appearance.race ?? '????',
                id: hero.id,
            }

            if(input == '' || heroData.name.includes(input) || heroData.race.includes(input)) {
                const name = document.createElement('h1');
                name.classList.add('text-primary-color', 'text-center', 'px-4', 'fs-4');
                name.textContent = heroData.name;

                const image = document.createElement('img');
                image.classList.add('w-75', 'mb-5', 'rounded', 'shadow-sm');
                image.setAttribute('src', heroData.image);

                const race = document.createElement('h3');
                race.classList.add('text-tertiary-color', 'cursor-pointer', 'fs-6', 'p-0', 'm-0', 'fw-light');
                race.textContent = heroData.race;

                const stats = document.createElement('a');
                stats.textContent = 'Stats';
                stats.classList.add('text-tertiary-color', 'cursor-pointer', 'text-decoration-none', 'fs-6', 'fw-light');
                stats.setAttribute('href', `#${heroData.id}`);
                
                const div = document.createElement('div');
                div.classList.add('d-flex', 'gap-3', 'justify-content-center', 'align-items-center', 'px-5');

                const item = document.createElement('li');
                item.classList.add('w-25', 'background-secondary-color', 'rounded', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'py-4');
                item.style.minWidth = '100px';
                item.style.maxWidth = '30%';
                div.appendChild(race);
                div.appendChild(stats);

                item.appendChild(image);
                item.appendChild(name);
                item.appendChild(div);
                cards.push(item);
                listHeroes.appendChild(item);
            }
        });
    }


    search.addEventListener('input', (event) => {
        input = event.target.value;
        listHeroes.replaceChildren();
        createCardsHeroes();
    });

    home.addEventListener('click', () => {
        window.location.assign('http://127.0.0.1:5500');
    })

    createCardsHeroes();
})

