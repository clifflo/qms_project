import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  quenchedClutchSetOfSeason
} from '../castLot/castLotHub';

const result =
quenchedClutchSetOfSeason

export default function CastLotGui() {
  return <JSONTree
    data={result}/>
}
