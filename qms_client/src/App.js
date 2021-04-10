import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_1 } from
'./features/sabaLot/calculations/rhoSeries/rhos/rho_1';

function showTree(){
  return (
    <div>
      <JSONTree data={rhocs_1}/>
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
