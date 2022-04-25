function BestPokemon() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
    <div>
      <p className="container">My favorite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </div>
  );
}

// you can write the function with arrow function like this:
// const BestPokemon = () => {
//     return <p>My favorite Pokemon is Squirtle</p>
// }

export default BestPokemon;
