import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  sigmaMonthOriginalPartialSet
} from '../calculations/calculationsHub';

export default function RhoGui() {
  return <JSONTree
    data={sigmaMonthOriginalPartialSet}/>
}
