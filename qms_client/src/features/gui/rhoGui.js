import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getEpsilonDualLongHooksContext_6
} from '../calculations/calculationsHub';

const result =
getEpsilonDualLongHooksContext_6('子', '甲寅','隨', '復')

export default function RhoGui() {
  return <JSONTree
    data={result}/>
}
