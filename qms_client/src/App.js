import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_8 } from
'./features/sabaLot/calculations/rhoSeries/rhos/rho_8';

function showTree(){
  return (
    <div>
      <JSONTree data={rhocs_8}/>
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
