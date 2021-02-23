import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import { metroSet }
  from './features/sabaLot/calculations/kappas';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        { JSON.stringify(metroSet) }
      </div>
    </div>
  );
}

export default App;
