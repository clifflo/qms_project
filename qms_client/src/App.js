import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getRhocxt_7 } from
'./features/sabaLot/calculations/rhoSeries/rhos/rho_7';

function showTree(){
  return (
    <div>
      <JSONTree data={getRhocxt_7('乙','謙')}/>
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
