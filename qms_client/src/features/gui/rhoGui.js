import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  sigmaBrakeBuiltContextSet_2
} from '../calculations/pearlForestHubClone';

export default function RhoGui() {
  return <JSONTree
    data={sigmaBrakeBuiltContextSet_2}/>
}
