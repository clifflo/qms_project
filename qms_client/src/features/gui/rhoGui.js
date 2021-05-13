import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getDeltaLongHookContext_6
} from '../calculations/rhoSeriesHubClone';

export default function RhoGui() {
  return <JSONTree
    data={getDeltaLongHookContext_6(
      '丙', '純坤', '復')}/>
}
