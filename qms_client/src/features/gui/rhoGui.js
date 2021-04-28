import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_2 } from
  '../calculations/rhoSeries/rhos/rho_04';

export default function RhoGui() {
  return <JSONTree data={rhocs_2}/>
}
