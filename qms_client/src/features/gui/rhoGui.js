import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { sigmas_2 } from
  '../calculations/rhoSeries/sigmas/sigma_01';

export default function RhoGui() {
  return <JSONTree data={sigmas_2}/>
}
