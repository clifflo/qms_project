import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import JSONTree from 'react-json-tree';
import { getDbp } from
  './features/sabaLot/calculations/twigs/twig_6';
import * as R from 'ramda';
import { efRhoLots_2 } from
  './features/sabaLot/calculations/rhos/rho_6';
import { RhoGui } from
  './features/sabaLot/gui/rhoGui';
import { getLhcts_6 } from
  './features/sabaLot/calculations/rhos/rho_6';


function showTree(){
  return (
    <JSONTree data={getLhcts_6()} />
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
