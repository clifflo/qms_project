import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import buildKappaTable
  from './features/sabaLot/calculations/kappas/kappaTable';
import JSONTree from 'react-json-tree';
import { getDelta_2 } from
  './features/sabaLot/calculations/rhos/rho_7';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        <JSONTree data={getDelta_2('申月丙子日明夷之小過卦')} />
      </div>
    </div>
  );
}

export default App;
