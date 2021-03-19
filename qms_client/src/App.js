import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import JSONTree from 'react-json-tree';
import { itemOfBtp } from
  './features/sabaLot/calculations/plastics/plastic_3';
import * as R from 'ramda';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">

        <JSONTree data={1} />
      </div>
    </div>
  );
}

export default App;
