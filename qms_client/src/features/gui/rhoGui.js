import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  sigmaDayBranchPartialSet
} from '../calculations/calculationsHub';

export default function RhoGui() {
  return <JSONTree
    data={sigmaDayBranchPartialSet}/>
}
