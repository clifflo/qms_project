import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_3 } from
  '../calculations/rhoSeries/rhos/rho_05';

export default function RhoGui() {
  return <JSONTree data={rhocs_3}/>
}
