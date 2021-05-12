import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getStrikeCrossSignSet
} from '../calculations/rhoSeriesHubClone';

export default function RhoGui() {
  return <JSONTree
    data={getStrikeCrossSignSet('純乾','復')}/>
}
