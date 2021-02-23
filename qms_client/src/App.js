import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import { chosenTypeTwoContext }
  from './features/sabaLot/plastics';


function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        { JSON.stringify(chosenTypeTwoContext) }
      </div>
    </div>
  );
}

export default App;
