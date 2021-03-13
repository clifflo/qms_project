import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import buildKappaTable
  from './features/sabaLot/calculations/kappas/kappaTable';
import JSONTree from 'react-json-tree';
import { tscSet }
  from './features/sabaLot/calculations/plastics/plastic_4';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        <JSONTree data={tscSet} />
      </div>
    </div>
  );
}

export default App;
