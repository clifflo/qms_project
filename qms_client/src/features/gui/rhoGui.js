import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  rhoBaseLongHookGapBinaryDigitsList
} from '../calculations/rhoSeries/rhoSeriesHub';

export default function RhoGui() {
  return <JSONTree
    data={rhoBaseLongHookGapBinaryDigitsList}/>
}
