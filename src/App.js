import './App.css';
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>English Dictionary</h1>
        <main>
          <Dictionary /> 
        </main>
        <footer className="App-footer"><small> Coded by Elisabeth Marquez</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
