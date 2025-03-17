import logo from './Logo.png';
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="img-fluid App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">
          <small>
          This SheCodes project is created by Nosipho, is open-sourced on{" "}
            <a
              href="https://github.com/NosiphoHlongwane1/react-dictionary"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}