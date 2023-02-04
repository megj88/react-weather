import './App.css';
import SearchEngine from "./SearchEngine";
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
  crossorigin="anonymous"
/>;
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
  crossorigin="anonymous"
></script>;

function App() {
  return (
    <div className="App">
    <div class="container">
      <div class="weather-app-wrapper">
        <div class="weather">
        <SearchEngine />
      <footer>Open-source code by <a href="https://github.com/megj88/react-weather" target="is_blank">Megan</a></footer>
        </div>
      </div>
    </div>
  </div>
      

  );
}

export default App;
