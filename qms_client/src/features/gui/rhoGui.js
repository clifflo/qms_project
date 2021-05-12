import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  deltaLongHookContextSet_2
} from '../calculations/rhoSeriesHubClone';

export default function RhoGui() {
  return <JSONTree
    data={deltaLongHookContextSet_2}/>
}
