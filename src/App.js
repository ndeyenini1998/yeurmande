import Navbar from './Components/navbar/Navbar'
import './App.css';
import Accueils from './Components/accueil/Accueils';
import  Hearders from './Components/header/Hearders'

function App() {
  return (
    <div className="App">
      <Hearders />
      <Navbar />
      <Accueils />
    </div>
  );
}

export default App;
