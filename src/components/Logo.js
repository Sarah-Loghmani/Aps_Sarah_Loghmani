// we can destructure the properties in the props like this {familyName , age , id}
export function Logo(props) {
  console.log(props);

  const appName = "jasem";
  return (
    <header>
      <h1 id={`pokemon${props.id}`}>
        Welcome to the {appName} {props.familyName} and have an age of{" "}
        {props.age + 5}
      </h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="bird"
      />
    </header>
  );
}

// i haven't rendered Logo2 component anywhere , i just wanted to show you the differences between the default export and export
export function Logo2() {
  const appName = "abud";
  return (
    <header>
      <h1>Welcome to the {appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="bird"
      />
    </header>
  );
}
