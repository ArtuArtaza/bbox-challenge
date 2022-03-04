import logo from "./logo.svg";
import "./App.css";
import Menu from './components/Menu/Menu'
import useFetch from "./hooks/useFetch";
import {MenuContainer} from './styledcomponents/list'
function App() {
  const [data, isLoading, hasError] = useFetch(
    "https://api.americadigital.com.ar/services/manifest/405"
  );
  console.log(data);
  return (
    <div className="App">
      {isLoading ? "CARGANDO"
      : (
      <MenuContainer>
        <Menu data={data}/>
      </MenuContainer>
      )}
    </div>
  );
}

export default App;
