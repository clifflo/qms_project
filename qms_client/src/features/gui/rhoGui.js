import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  quenchedClutchSetOfSeason
} from '../urim/calculationsHub';

const result =
quenchedClutchSetOfSeason

export default function RhoGui() {
  return <JSONTree
    data={result}/>
}
