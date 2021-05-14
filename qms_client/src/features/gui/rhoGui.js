import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  twigChosenTypeOneFinalEnvelopSet
} from '../calculations/twigHubCloneBase';

export default function RhoGui() {
  return <JSONTree
    data={twigChosenTypeOneFinalEnvelopSet}/>
}
