import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import buildKappaTable
  from './features/sabaLot/calculations/kappas/kappaTable';
import JSONTree from 'react-json-tree';
import { parseRin } from
  './features/sabaLot/calculations/rhos/rho_6';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        <JSONTree data={parseRin('申月乙未日同人之無妄卦')} />
      </div>
    </div>
  );
}

export default App;
