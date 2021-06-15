import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getEpsilonDualLongHooksContext_5
} from '../calculations/calculationsHub';

export default function RhoGui() {
  return <JSONTree
    data={getEpsilonDualLongHooksContext_5('甲子','隨', '復')}/>
}
