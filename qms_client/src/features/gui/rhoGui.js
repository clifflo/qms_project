import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  sigmaClutchContextSetOfSeason
} from '../calculations/calculationsHub';

const result =
sigmaClutchContextSetOfSeason

export default function RhoGui() {
  return <JSONTree
    data={result}/>
}
