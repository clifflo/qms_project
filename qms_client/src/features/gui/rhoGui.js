import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getTauDateContextFromIso
} from '../calculations/tauHubCloneBase';

export default function RhoGui() {
  return <JSONTree
    data={getTauDateContextFromIso('2020-5-20')}/>
}
