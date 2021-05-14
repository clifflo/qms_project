import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  twigBranchPauseContextSet
} from '../calculations/twigHubCloneBase';

export default function RhoGui() {
  return <JSONTree
    data={twigBranchPauseContextSet}/>
}
