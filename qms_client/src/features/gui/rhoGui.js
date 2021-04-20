import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { sgcxts_4 } from
  '../calculations/rhoSeries/sigmas/sigma_02';

export default function RhoGui() {
  return <JSONTree data={sgcxts_4}/>
}
