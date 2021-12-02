import 'font-awesome/css/font-awesome.min.css';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import './App.css';
import Dictionary from "./Dictionary";
import Emoji from "./Emoji";
import Font from "./Font";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <div className="App">
      <div className="container">
        
      <h1><span role="img" aria-label="book">📚</span>English Dictionary</h1>
        <Font />
        <main>
          <Dictionary /> 
        </main>
        <footer className="App-footer"><a href="https://github.com/elidelmar/dictionary-react"> <FontAwesomeIcon icon={faGithub} className="github"></FontAwesomeIcon> Openly Sourced Code </a> by Elisabeth Marquez
        </footer>
      </div>
    </div>
  );
}

export default App;
