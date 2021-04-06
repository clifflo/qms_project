import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getRcbrc_1 } from
'./features/sabaLot/calculations/rhoSeries/deltas/delta_2';

function showTree(){
  return (
    <div>
      <JSONTree data={getRcbrc_1('卯', '蹇')}/>
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
