import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  sigmaMonthBranchBrakePartialSet
} from '../calculations/calculationsHub';

export default function RhoGui() {
  return <JSONTree
    data={sigmaMonthBranchBrakePartialSet}/>
}
