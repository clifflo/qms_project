import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import { getChosen }
  from './features/sabaLot/plastics';


function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        { getChosen('火','亥')}
      </div>
    </div>
  );
}

export default App;
