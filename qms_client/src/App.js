import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import { checker }
  from './features/sabaLot/calculations/kappas';
import JSONTree from 'react-json-tree'

function App() {

  return (
    <div className="App">
      <SabaLot />
      <div className="Saba">
        <JSONTree data={checker('丙戌日巳時申將')} />
      </div>
    </div>
  );
}

export default App;
