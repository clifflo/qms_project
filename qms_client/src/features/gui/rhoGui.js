import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getDlcxt_2 } from
  '../calculations/rhoSeries/deltas/delta_06';

export default function RhoGui() {
  return <JSONTree data={getDlcxt_2('純坤','明夷','丁')}/>
}
