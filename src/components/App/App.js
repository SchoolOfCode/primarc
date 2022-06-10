import "./App.css";
import CategoryContainer from "../CategoryContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Primarc</p>
        <CategoryContainer category={`women's clothing`}/>
      </header>
    </div>
  );
}

export default App;
