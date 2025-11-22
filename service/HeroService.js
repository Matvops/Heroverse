import { ApiMain } from "./ApiMain.js";

window.addEventListener('load', () => {

    const api = new ApiMain();

    const emptyHero = {
        name: null,
        gender: null,
        race: null,
        fullName: null,
        publisher: null,
        alignment: null,
        image: null,
        powerstats: {
            intelligence: null,
            strength: null,
            speed: null,
            durability: null,
            power: null,
            combat: null,
        }
    };

    
    async function getHeroData()
    {

        try {
            
            const urlQueryParams = window.location.search;
            const params = new URLSearchParams(urlQueryParams);
            const id = params.get('id');
            
            const hero = await api.getById(id);

            fillHeroObject(hero);

        } catch(error) {
            console.error(error.message);
        }

    }

    function fillHeroObject(hero) {
        emptyHero.name = hero.name;
        emptyHero.gender = hero.appearence?.gender ?? '????';
        emptyHero.race = hero.appearence?.race ?? '????';
        emptyHero.fullName = hero.biography.fullName ?? '????';
        emptyHero.publisher = hero.biography.publisher ?? '????';
        emptyHero.alignment = hero.biography.alignment ?? '????';
        emptyHero.image = hero.images.md ?? '????';
        emptyHero.powerstats.combat = hero.powerstats.combat ?? '????';
        emptyHero.powerstats.durability = hero.powerstats.durability ?? '????';
        emptyHero.powerstats.intelligence = hero.powerstats.intelligence ?? '????';
        emptyHero.powerstats.power  = hero.powerstats.power ?? '????';
        emptyHero.powerstats.speed = hero.powerstats.speed ?? '????';
        emptyHero.powerstats.strength = hero.powerstats.strength ?? '????';
    }

    getHeroData();
});