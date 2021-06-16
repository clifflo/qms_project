import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  quenchedClutchSetOfSeason
} from '../calculations/calculationsHub';

const result =
quenchedClutchSetOfSeason

export default function RhoGui() {
  return <JSONTree
    data={result}/>
}
