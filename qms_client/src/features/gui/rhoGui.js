import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_4 } from
  '../calculations/rhoSeries/rhos/rho_08';

export default function RhoGui() {
  return <JSONTree data={rhocs_4}/>
}
