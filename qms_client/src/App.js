import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import kappaContext
  from './features/sabaLot/calculations/kappas/kappaContext';
import JSONTree from 'react-json-tree';
import { branchSlider }
  from './features/sabaLot/calculations/plastics/plastic_3';

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        <JSONTree data={branchSlider('卯', 6)} />
      </div>
    </div>
  );
}

export default App;
