import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';

function App() {

  return (
    <div className="App">
      <SabaLot />
    </div>
  );
}

export default App;
