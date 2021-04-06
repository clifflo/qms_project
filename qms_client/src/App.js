import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getRdbrc_1 } from
'./features/sabaLot/calculations/rhoSeries/deltas/delta_2';

function showTree(){
  return (
    <div>
      <JSONTree data={getRdbrc_1('未', '大過')}/>
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
