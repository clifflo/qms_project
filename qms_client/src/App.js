import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_6 } from
'./features/sabaLot/calculations/rhoSeries/rhos/rho_6';

function showTree(){
  return (
    <div>
      <JSONTree data={rhocs_6}/>
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
