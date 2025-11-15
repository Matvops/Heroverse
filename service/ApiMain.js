export class ApiMain {

    API = 'https://akabab.github.io/superhero-api/api'
    all = '/all.json';
    stats = '/powerstats';
    biography = '/biography';
        

    async getAll () {

        const response = await fetch(this.API + this.all);

        if(!response.ok) {
            throw new Error('Erro ao consultar todos os heróis');
        }

        const data = await response.json();

        return data;
    } 

}