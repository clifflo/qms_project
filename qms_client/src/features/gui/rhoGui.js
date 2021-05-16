import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getEpsilonDualLongHooksContext_2
} from '../calculations/pearlForestHubClone';

export default function RhoGui() {
  return <JSONTree
    data={getEpsilonDualLongHooksContext_2(
      '丙子', '隨', '歸妹'
    )}/>
}
