import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_7 } from
  './features/sabaLot/calculations/rhos/rho_8';
import { getWtoday } from
  './features/sabaLot/calculations/calendar';

function showTree(){
  return (
    <JSONTree data={getWtoday()} />
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
