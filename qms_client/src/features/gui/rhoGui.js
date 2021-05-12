import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  deltaLongHookContextSet_4
} from '../calculations/rhoSeriesHubClone';

export default function RhoGui() {
  return <JSONTree
    data={deltaLongHookContextSet_4}/>
}
