import { ApiMain } from "./ApiMain.js";



window.addEventListener('load', () => {

    const api = new ApiMain();
    let heroes = new Array();

   


    async function createCardsHeros() {

        heroes = await api.getAll();

        
        if(heroes.length === 0) return;

        heroes.forEach(hero => {

            const heroData = {
                name: hero.name,
                image: hero.images.md,
                race: hero.appearance.race,
                id: hero.id,
            }
            // hero.images.md
            // hero.appearance.race

            const name = document.createElement('h1');
            name.textContent = heroData.name;

            const image = document.createElement('img');
            image.setAttribute('src', heroData.image);

            const race = document.createElement('a');
            race.textContent = heroData.race;

            const stats = document.createElement('a');

            
            const item = document.createElement('li');


            console.log(hero);
        });


    }

    createCardsHeros();
})

