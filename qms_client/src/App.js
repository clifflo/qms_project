import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from
'./features/sabaLot/SabaLot';
import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rpcsl } from
'./features/sabaLot/calculations/rhoSeries/rhos/rho_9';
import { getLhnFromBilot } from
'./features/sabaLot/calculations/rhoSeries/deltas/delta_1';


function showTree(){
  return (
    <JSONTree data={getLhnFromBilot('b001100')} />
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
