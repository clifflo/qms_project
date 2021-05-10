import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  rhoContextSet_3
} from '../calculations/rhoSeries/rhoSeriesHub';

export default function RhoGui() {
  return <JSONTree
    data={rhoContextSet_3}/>
}
