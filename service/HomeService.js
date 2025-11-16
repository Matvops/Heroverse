import { ApiMain } from "./ApiMain.js";



window.addEventListener('load', () => {

    const listHeroes = document.querySelector('#list-heroes');
    const api = new ApiMain();
    let heroes = new Array();
    let cards = [];
   


    async function createCardsHeroes() {

        heroes = await api.getAll();

        
        if(heroes.length === 0) return;

        heroes.forEach(hero => {

            const heroData = {
                name: hero.name,
                image: hero.images.sm   ,
                race: hero.appearance.race ?? '????',
                id: hero.id,
            }

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
        });


    }

    createCardsHeroes();
})

