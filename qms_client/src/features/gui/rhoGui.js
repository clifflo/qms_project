import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getEpsilonDualLongHooksContext_5
} from '../calculations/pearlForestHubClone';

export default function RhoGui() {
  return <JSONTree
    data={getEpsilonDualLongHooksContext_5(
      '丙子', '隨', '歸妹'
    )}/>
}
