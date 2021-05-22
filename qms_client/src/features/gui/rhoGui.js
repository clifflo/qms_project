import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  sigmaBrakeHandfulContextSet_2
} from '../calculations/pearlForestHubClone';

export default function RhoGui() {
  return <JSONTree
    data={sigmaBrakeHandfulContextSet_2}/>
}
