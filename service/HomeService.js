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

                const div = document.createElement('div');
                div.classList.add('text-center', 'mx-auto');
                div.setAttribute('style', 'width: 80%; height: 280px');

                div.addEventListener('click', () => {
                    window.location.assign(`http://127.0.0.1:5500/pages/Hero.html?id=${heroData.id}`);
                });

                const image = document.createElement('img');
                image.classList.add('image-hero', 'rounded');
                image.setAttribute('src', heroData.image);
                div.appendChild(image);

                
                const name = document.createElement('h1');
                name.classList.add('text-primary-color', 'text-center', 'px-4', 'fs-4', 'm-0', 'py-2');
                name.textContent = heroData.name;


                const race = document.createElement('h3');
                race.classList.add('text-tertiary-color', 'cursor-pointer', 'fs-6', 'p-0', 'fw-light', 'mb-0', 'mt-auto');
                race.textContent = heroData.race;


                const item = document.createElement('li');
                item.classList.add('w-25', 'background-secondary-color', 'rounded', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center', 'py-4');
                item.style.minWidth = '100px';
                item.style.maxWidth = '30%';


                item.appendChild(div);
                item.appendChild(name);
                item.appendChild(race);
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

