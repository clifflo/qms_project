import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getRcxt4ByLhn } from
'./features/sabaLot/calculations/rhoSeries/rhos/rho_4';

function showTree(){
  return (
    <div>
      <JSONTree data={getRcxt4ByLhn('謙')}/>
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
