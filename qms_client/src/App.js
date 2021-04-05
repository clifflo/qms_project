import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getRcxt3ByLn } from
'./features/sabaLot/calculations/rhoSeries/rhos/rho_3';

function showTree(){
  return (
    <div>
      <JSONTree data={getRcxt3ByLn('無妄')}/>
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
