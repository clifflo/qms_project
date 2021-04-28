import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { hycrs } from
  '../calculations/rhoSeries/rhos/rho_14';

export default function RhoGui() {
  return <JSONTree data={hycrs}/>
}
