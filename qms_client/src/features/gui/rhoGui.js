import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getQuenchedCrunchOfMonth
} from '../calculations/calculationsHub';

export default function RhoGui() {
  return <JSONTree
    data={getQuenchedCrunchOfMonth('子')}/>
}
