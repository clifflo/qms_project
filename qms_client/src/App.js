import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_4 } from
'./features/sabaLot/calculations/rhoSeries/rhos/rho_4';

function showTree(){
  return (
    <div>
      <JSONTree data={rhocs_4}/>
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
