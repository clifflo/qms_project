import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  tauMonthGlobalContextSet_2
} from '../calculations/tauHubCloneBase';

export default function RhoGui() {
  return <JSONTree
    data={tauMonthGlobalContextSet_2}/>
}
