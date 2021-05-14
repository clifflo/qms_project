import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  chosenTypeOneFinalEnvelopSet
} from '../calculations/twigHubCloneBase';

export default function RhoGui() {
  return <JSONTree
    data={chosenTypeOneFinalEnvelopSet}/>
}
