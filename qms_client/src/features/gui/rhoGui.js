import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhocs_8 } from
  '../calculations/rhoSeries/rhos/rho_12';

export default function RhoGui() {
  return <JSONTree data={rhocs_8}/>
}
