import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  builtTauYearContextSet_2
} from '../calculations/tauHubCloneBase';

export default function RhoGui() {
  return <JSONTree
    data={builtTauYearContextSet_2}/>
}
