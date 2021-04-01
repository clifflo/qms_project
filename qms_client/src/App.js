import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { SabaLot } from './features/sabaLot/SabaLot';
import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_7 } from
  './features/sabaLot/calculations/rhos/rho_8';
import { getWtoday } from
  './features/sabaLot/calculations/calendar';

function chengau() {
  const dates =
    ['24-3-2020',
    '22-4-2020',
    '22-5-2020',
    '23-6-2020',
    '22-7-2020',
    '24-8-2020',
    '22-9-2020',
    '22-10-2020',
    '24-11-2020',
    '22-20-2020',
    '22-1-2021',
    '23-2-2021']

  let results = '';

  for(let i = 0; i < 12; i++){
    const date = dates[i];
    let result =
      'Received rent on '
      + date +
      ' for the amount of ';

    if(i < 7){
      result += '20000.';
    }
    else {
      result += '20800.'
    }

    result += '\n';
    results += result;
  }

  console.log(results);

}

function showTree(){
  return (
    <JSONTree data={getWtoday()} />
  )
}


function App() {

  return (
    <div className="App">
      {showTree()}
    </div>
  );
}

export default App;
