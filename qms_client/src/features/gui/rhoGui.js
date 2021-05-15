import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getDeltaLongHookContext_8
} from '../calculations/rhoSeriesHubClone';

export default function RhoGui() {
  return <JSONTree
    data={getDeltaLongHookContext_8(
      '丙子', '純坤', '歸妹'
    )}/>
}
