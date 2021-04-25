import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_1 } from
  '../calculations/rhoSeries/rhos/rho_02';

export default function RhoGui() {
  return <JSONTree data={rhocs_1}/>
}
