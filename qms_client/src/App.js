import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import JSONTree from 'react-json-tree';
import { getDbp } from
  './features/sabaLot/calculations/twigs/twig_6';
import * as R from 'ramda';
import { rhocs_7, nonLhhdCount } from
  './features/sabaLot/calculations/rhos/rho_7';


function showTree(){
  return (
    <JSONTree data={rhocs_7} />
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
