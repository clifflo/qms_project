import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  rhoLongHookContextSet_5
} from '../calculations/rhoSeries/rhoFiles/rhoHub';

export default function RhoGui() {
  return <JSONTree
    data={rhoLongHookContextSet_5}/>
}
