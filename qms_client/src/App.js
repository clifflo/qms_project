import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import JSONTree from 'react-json-tree';
import { getDbp } from
  './features/sabaLot/calculations/plastics/plastic_6';
import * as R from 'ramda';
import { checkDay } from
  './features/sabaLot/calendar';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">

        <JSONTree data={checkDay('2021-3-21')} />
      </div>
    </div>
  );
}

export default App;
