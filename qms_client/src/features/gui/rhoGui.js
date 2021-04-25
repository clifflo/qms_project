import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { rhksrs } from
  '../calculations/rhoSeries/rhos/rho_04';

export default function RhoGui() {
  return <JSONTree data={rhksrs}/>
}
