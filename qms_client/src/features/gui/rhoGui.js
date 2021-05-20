import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getTauDayContext_1
} from '../calculations/tauHubCloneBase';

export default function RhoGui() {
  return <JSONTree
    data={getTauDayContext_1('2021-05-20')}/>
}
