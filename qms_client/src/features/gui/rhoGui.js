import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getDeltaPaladinContextByAskingDayTrunkChinese
} from '../calculations/rhoSeriesHubClone';

export default function RhoGui() {
  return <JSONTree
    data={getDeltaPaladinContextByAskingDayTrunkChinese('乙')}/>
}
