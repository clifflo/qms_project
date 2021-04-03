import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rpspm_2 } from
  './features/sabaLot/calculations/rhoSeries/rhos/rho_9';

function showTree(){
  return (
    <JSONTree data={rpspm_2} />
  )
}


function App() {

  return (
    <div className="App">
      {showTree()}
    </div>
  );
}

export default App;
