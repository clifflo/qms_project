import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import buildKappaTable
  from './features/sabaLot/calculations/kappas/kappaTable';
import JSONTree from 'react-json-tree';
import { getBaseHookGapSeries }
  from './features/sabaLot/calculations/rhos/rho_3';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        <JSONTree data={getBaseHookGapSeries()} />
      </div>
    </div>
  );
}

export default App;
