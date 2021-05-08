import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import { bakedNattoSet } from
  '../calculations/rhoSeries/rhoFiles/rhoFile_02';

export default function RhoGui() {
  return <JSONTree data={bakedNattoSet}/>
}
