import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_7 } from
'./features/sabaLot/calculations/rhoSeries/rhos/rho_7';

function showTree(){
  return (
    <div>
      <JSONTree data={rhocs_7}/>
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
