import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getRhoLongHookContextByName_2
} from '../calculations/rhoSeriesHubClone';

export default function RhoGui() {
  return <JSONTree
    data={getRhoLongHookContextByName_2('隨')}/>
}
