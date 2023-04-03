import Pokemon from "../components/Pokemon";

function PokemonList({ list }) {
  return list.map((pokemon) => (
    <Pokemon key={pokemon.name} pokemon={pokemon} />
  ));
}

export default PokemonList;
