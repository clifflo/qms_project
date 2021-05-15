import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getDeltaLongHookContext_7
} from '../calculations/rhoSeriesHubClone';

export default function RhoGui() {
  return <JSONTree
    data={getDeltaLongHookContext_7(
      '丙子', '純坤', '歸妹'
    )}/>
}
