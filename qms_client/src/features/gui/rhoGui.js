import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhgbs } from
  '../calculations/rhoSeries/rhos/rho_04';

export default function RhoGui() {
  return <JSONTree data={rhgbs}/>
}
