import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { getDlcxt_2 } from
  '../calculations/rhoSeries/deltas/delta_03';

export default function RhoGui() {
  return <JSONTree data={getDlcxt_2('隨','復','辛')}/>
}
