import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getDeltaPilotPaladinIndexByAskingDayTrunkChinese
} from '../calculations/rhoSeriesHubClone';

export default function RhoGui() {
  return <JSONTree
    data={getDeltaPilotPaladinIndexByAskingDayTrunkChinese('乙')}/>
}
