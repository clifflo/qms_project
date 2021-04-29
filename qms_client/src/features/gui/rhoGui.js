import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getDcstl } from
  '../calculations/rhoSeries/deltas/delta_03';

export default function RhoGui() {
  return <JSONTree data={getDcstl('純坤之隨')}/>
}
