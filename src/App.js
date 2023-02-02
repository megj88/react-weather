import './App.css';
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
       <h1>Weather Search Engine</h1>
       <SearchEngine />
       <p>Open-source code by <a href="https://github.com/megj88/react-weather" target="_blank">Megan</a></p>
      </header>

    </div>
  );
}

export default App;
