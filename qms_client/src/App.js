import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import buildKappaTable
  from './features/sabaLot/calculations/kappas/kappaTable';
import JSONTree from 'react-json-tree';
import { natos }
  from './features/sabaLot/calculations/rhos/rho_1';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        <JSONTree data={natos} />
      </div>
    </div>
  );
}

export default App;
