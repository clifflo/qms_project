import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  twigHitContextSet
} from '../calculations/twigHubCloneBase';

export default function RhoGui() {
  return <JSONTree
    data={twigHitContextSet}/>
}
