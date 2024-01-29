import './App.css';
import Famille from './components/Famille';
import ButtonAppBar from './components/MuiNavbar';
import Utilisateur from './components/Utilisateur';
import Vehicule from './components/Vehicule';

function App() {
  return (
    <div className="App">
      <ButtonAppBar/>
      <Vehicule/>
      <Utilisateur/>
      <Famille/>
    </div>
  );
}

export default App;
