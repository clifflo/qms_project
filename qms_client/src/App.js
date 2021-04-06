import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getBscrt } from
'./features/sabaLot/calculations/twigs/twig_4';

function showTree(){
  return (
    <div>
      <JSONTree data={getBscrt('卯')}/>
    </div>
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
