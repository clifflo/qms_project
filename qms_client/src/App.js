import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import JSONTree from 'react-json-tree';
import { getDbp } from
  './features/sabaLot/calculations/plastics/plastic_6';
import * as R from 'ramda';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">

        <JSONTree data={getDbp('2021-3-19')} />
      </div>
    </div>
  );
}

export default App;
