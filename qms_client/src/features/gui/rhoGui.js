import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  hookTrainContextSet
} from '../calculations/rhoSeries/rhoSeriesHub';

export default function RhoGui() {
  return <JSONTree
    data={hookTrainContextSet}/>
}
