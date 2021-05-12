import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getDeltaDatedLongHookContextSet
} from '../calculations/rhoSeriesHubClone';

export default function RhoGui() {
  return <JSONTree
    data={getDeltaDatedLongHookContextSet('丁')}/>
}
