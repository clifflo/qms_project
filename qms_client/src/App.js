import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import buildKappaTable
  from './features/sabaLot/calculations/kappas/kappaTable';
import JSONTree from 'react-json-tree';
import { longHooks_1 }
  from './features/sabaLot/calculations/rhos/rho_1';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        <JSONTree data={longHooks_1} />
      </div>
    </div>
  );
}

export default App;
