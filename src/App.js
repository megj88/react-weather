import './App.css';
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
       <h1>Weather Search Engine</h1>
       <SearchEngine />
      </header>
      <footer>Open-source code by <a href="https://github.com/megj88/react-weather" target="is_blank">Megan</a></footer>

    </div>
  );
}

export default App;
