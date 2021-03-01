import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import { getElementalReaction }
  from './features/sabaLot/calculations/plastics';
import JSONTree from 'react-json-tree'

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        <JSONTree data={getElementalReaction('金','木')} />
      </div>
    </div>
  );
}

export default App;
