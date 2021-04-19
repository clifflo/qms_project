import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { sgcxts_3 } from
  '../calculations/rhoSeries/sgcxts/sigma_01';

export default function RhoGui() {
  return <JSONTree data={sgcxts_3}/>
}
