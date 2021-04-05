import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getCestm } from
'./features/sabaLot/calculations/rhoSeries/deltas/delta_2';

function showTree(){
  return (
    <div>
      <JSONTree data={getCestm('純坤', '歸妹')}/>
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
