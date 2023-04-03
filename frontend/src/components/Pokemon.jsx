import PropTypes from "prop-types";
import { useState } from "react";

function Pokemon({ pokemon }) {
  const [isCaught, setIsCaught] = useState(pokemon.isCaught);

  const pokeball = () => {
    setIsCaught(!isCaught);
  };

  return (
    <figure>
      {pokemon.imgSrc == null ? (
        <p>???</p>
      ) : (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      )}
      <figcaption>{pokemon.name}</figcaption>
      <input type="checkbox" checked={isCaught} onClick={pokeball} />
    </figure>
  );
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
    isCaught: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Pokemon;
