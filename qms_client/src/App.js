import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_2 } from
'./features/sabaLot/calculations/rhoSeries/rhos/rho_2';

function showTree(){
  return (
    <div>
      <JSONTree data={rhocs_2}/>
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
