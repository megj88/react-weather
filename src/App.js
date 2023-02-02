import './App.css';
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
       <h1>Weather Search Engine</h1>
       <SearchEngine />
      </header>
      <footer>
        <p>Open-source code by <a href="https://github.com/megj88/react-weather" target="_blank">Megan</a></p>
      </footer>
    </div>
  );
}

export default App;
