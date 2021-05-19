import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  tauMonthGlobalContextSet_1
} from '../calculations/tauHubCloneBase';

export default function RhoGui() {
  return <JSONTree
    data={tauMonthGlobalContextSet_1}/>
}
