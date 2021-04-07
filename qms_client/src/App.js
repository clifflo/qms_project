import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { test } from
'./features/sabaLot/calculations/twigs/twig_8';

function showTree(){
  return (
    <div>
      <JSONTree data={test}/>
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
