import profile from './profile.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile}  alt="profile" />
        <p>
           <code>Evalución parcial 1</code> 
        </p>
        <p>
           <code>Alumno(a): Casiano Gamiz Juan David</code> 
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/juan-david-casiano-839091229"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKED IN DE MI RPFILE
        </a>
        <a
          className="App-link"
          href="https://www.medikt.com.mx/practicas/documentacion.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          DOCUMENTACIÓN PARCIAL 1
        </a>
      </header>
    </div>
  );
}

export default App;
