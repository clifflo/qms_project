import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getCoatedCrunchOfMonth
} from '../calculations/calculationsHub';

export default function RhoGui() {
  return <JSONTree
    data={getCoatedCrunchOfMonth('子')}/>
}
