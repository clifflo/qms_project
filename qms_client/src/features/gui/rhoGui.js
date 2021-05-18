import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  rawTauMonthGlobalContextSet
} from '../calculations/tauHubCloneBase';

export default function RhoGui() {
  return <JSONTree
    data={rawTauMonthGlobalContextSet}/>
}
