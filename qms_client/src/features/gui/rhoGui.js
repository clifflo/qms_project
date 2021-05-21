import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getTauDayContextFromIso
} from '../calculations/tauHubCloneBase';

export default function RhoGui() {
  return <JSONTree
    data={getTauDayContextFromIso('2021-05-22')}/>
}
