import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  deltaLongHookContextSet
} from '../calculations/rhoSeries/deltaFiles/deltaFile_02';

export default function RhoGui() {
  return <JSONTree
    data={deltaLongHookContextSet}/>
}
