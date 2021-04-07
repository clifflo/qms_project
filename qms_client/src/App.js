import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { brlcSet } from
'./features/sabaLot/calculations/twigs/twig_6';

function showTree(){
  return (
    <div>
      <JSONTree data={brlcSet}/>
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
