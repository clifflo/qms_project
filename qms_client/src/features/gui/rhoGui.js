import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getEpsilonLongHookContext_1
} from '../calculations/pearlForestHubClone';

export default function RhoGui() {
  return <JSONTree
    data={getEpsilonLongHookContext_1(
      '丙子', '純坤', '歸妹'
    )}/>
}
