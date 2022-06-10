import "./App.css";
import CategoryContainer from "../CategoryContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Primarc</p>
        <CategoryContainer category={`Women's Clothing`} />
        <CategoryContainer category={`Men's Clothing`} />
        <CategoryContainer category={`Jewelery`} />
        <CategoryContainer category={`Electronics`} />
      </header>
    </div>
  );
}

export default App;
