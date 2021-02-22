import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import {
  getBranchFromEnglish,
  getElementOfTrunk,
  getSelfArrestment }
  from './features/sabaLot/plastics';


function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        Branch: Psi is { getBranchFromEnglish('Psi')}
        Element: Beta is { getElementOfTrunk('甲')}
        Self arrestment : {getSelfArrestment()}
      </div>
    </div>
  );
}

export default App;
