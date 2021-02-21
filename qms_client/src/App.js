import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import {
  getBranchFromEnglish,
  getElementOfTrunk }
  from './features/sabaLot/plasticReactions';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        Branch: Psi is { getBranchFromEnglish('Psi')}
        Element: Beta is { getElementOfTrunk('甲')}
      </div>
    </div>
  );
}

export default App;
