import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import kappaContext
  from './features/sabaLot/calculations/kappas/kappaContext';
import JSONTree from 'react-json-tree'

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        <JSONTree data={kappaContext('甲辰日卯時亥將')} />
      </div>
    </div>
  );
}

export default App;
