import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getDlcxt_3 } from
  '../calculations/rhoSeries/deltas/delta_06';
import { getRjkcr } from
  '../calculations/rhoSeries/deltas/delta_07';

const result = R.compose(
  getRjkcr)
(getDlcxt_3('純坤','明夷','丁'))

export default function RhoGui() {
  return <JSONTree data={result}/>
}
