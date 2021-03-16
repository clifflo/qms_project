import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import JSONTree from 'react-json-tree';
import { testTrunk } from
  './features/sabaLot/calculations/plastics/plastic_1';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
      
        <JSONTree data={testTrunk()} />
      </div>
    </div>
  );
}

export default App;
