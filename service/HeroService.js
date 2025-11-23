import { ApiMain } from "./ApiMain.js";

window.addEventListener('load', () => {

    const api = new ApiMain();

    const name = document.querySelector('#name');
    const gender = document.querySelector('#gender');
    const race = document.querySelector('#race');
    const fullName = document.querySelector('#fullname');
    const publisher = document.querySelector('#publisher');
    const alignment = document.querySelector('#alignment');
    const image = document.querySelector('#hero');
    const combat = document.querySelector('#combat');
    const power = document.querySelector('#power');
    const durability = document.querySelector('#durability');
    const speed = document.querySelector('#speed');
    const strength = document.querySelector('#strength');
    const intelligence = document.querySelector('#intelligence');

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
            console.log(hero);
            fillHeroObject(hero);

            createElements();


        } catch(error) {
            console.error(error.message);
        }

    }

    function fillHeroObject(hero) {
        emptyHero.name = hero.name;
        emptyHero.gender = hero.appearance?.gender ?? '????';
        emptyHero.race = hero.appearance?.race ?? '????';
        emptyHero.fullName = hero.biography.fullName === '' ? '????' : hero.biography.fullName;
        emptyHero.publisher = hero.biography.publisher ?? '????';
        emptyHero.alignment = hero.biography.alignment ?? '????';
        emptyHero.image = hero.images.lg ?? '????';
        emptyHero.powerstats.combat = hero.powerstats.combat ?? '????';
        emptyHero.powerstats.durability = hero.powerstats.durability ?? '????';
        emptyHero.powerstats.intelligence = hero.powerstats.intelligence ?? '????';
        emptyHero.powerstats.power  = hero.powerstats.power ?? '????';
        emptyHero.powerstats.speed = hero.powerstats.speed ?? '????';
        emptyHero.powerstats.strength = hero.powerstats.strength ?? '????';
    }

    function createElements() {

        name.textContent += emptyHero.name;
        race.textContent += emptyHero.race;
        fullName.textContent += emptyHero.fullName;
        gender.textContent += emptyHero.gender;
        publisher.textContent += emptyHero.publisher;
        alignment.textContent += emptyHero.alignment == 'good' ? 'Hero' : 'Vilain/Anti-hero';
        image.setAttribute('src',  emptyHero.image);

        combat.textContent += emptyHero.powerstats.combat;
        durability.textContent += emptyHero.powerstats.durability;
        intelligence.textContent += emptyHero.powerstats.intelligence;
        power.textContent += emptyHero.powerstats.power;
        speed.textContent += emptyHero.powerstats.speed;
        strength.textContent += emptyHero.powerstats.strength;

    }

    getHeroData();
});