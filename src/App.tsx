import { Countries } from "./components/countries";
import { FilterCountries } from "./components/filterCountries";
import { NavBar } from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <FilterCountries />
      <Countries />
    </>
  );
}

export default App;
