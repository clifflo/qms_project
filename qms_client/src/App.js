import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_8 } from
  './features/sabaLot/calculations/rhos/rho_8';

function showTree(){
  return (
    <JSONTree data={rhocs_8} />
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
