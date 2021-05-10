import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getRhoContextByLongHookName_2
} from '../calculations/rhoSeries/rhoSeriesHub';

export default function RhoGui() {
  return <JSONTree
    data={getRhoContextByLongHookName_2('隨')}/>
}
