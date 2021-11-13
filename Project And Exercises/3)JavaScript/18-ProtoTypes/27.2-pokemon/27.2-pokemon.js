function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    this.callPokemon = () => {
        console.log(`I choose you, ${this.name}`);
    }
    this.attack = () => {
        console.log(`${this.name} used ${this.attackList}`);
    }
}
const aerodactyl = new Pokemon('Aerodactyl', 'Flying', 'Mage')
const abra = new Pokemon('Abra', 'Psychic', 'Sword')
const absol = new Pokemon('Absol', 'Dark', 'Range')

aerodactyl.callPokemon()
aerodactyl.attack()

abra.callPokemon()
abra.attack()

absol.callPokemon()
absol.attack()
