import profile from './profile.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="profile" />
        <p>
           <code>Soy un estudiante de la UTD y este es mi hola mundo en react</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://utd.edu.mx"
          target="_blank"
          rel="noopener noreferrer"
        >
          ACCEDER A LA UTD
        </a>
      </header>
    </div>
  );
}

export default App;
