import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import {
  getBranchFromEnglish,
  getElementOfTrunk,
  allArrestments }
  from './features/sabaLot/plastics';


function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        Branch: Phi is { getBranchFromEnglish('Phi')}
      </div>
    </div>
  );
}

export default App;
