import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getFlushop } from
'./features/sabaLot/calculations/twigs/twig_5';

function showTree(){
  return (
    <div>
      <JSONTree data={getFlushop('丑')}/>
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
