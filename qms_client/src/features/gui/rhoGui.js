import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getCoatedCrossBranch
} from '../calculations/calculationsHub';

export default function RhoGui() {
  return <JSONTree
    data={getCoatedCrossBranch('申', '子')}/>
}
