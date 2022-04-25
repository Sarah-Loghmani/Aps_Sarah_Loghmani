import HelloAPS from "./components/HelloAPS";
import { Logo } from "./components/Logo";
import CaughtPokemon from "./components/CaughtPokemon";
import BestPokemon from "./components/BestPokemon";
import Power from "./components/Power";

function App() {
  const familyName = "jasem zadeh";
  return (
    <div>
      <Logo familyName={familyName} id={5} age={15} />
      <BestPokemon />
      <CaughtPokemon />
      <HelloAPS />
      <Power number={2} />
    </div>
  );
}

export default App;
