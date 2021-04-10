import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rpcsl } from
'./features/sabaLot/calculations/rhoSeries/rhos/rho_6';

function showTree(){
  return (
    <div>
      <JSONTree data={rpcsl}/>
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
