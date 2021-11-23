import './App.css';
import Dictionary from "./Dictionary";
import Font from "./Font";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>English Dictionary</h1>
        <Font />
        <main>
          <Dictionary /> 
        </main>
        <footer className="App-footer"><small> Openly Sourced Code by Elisabeth Marquez </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
