import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  testIsValidTwigTrunkChinese_02
} from '../calculations/twigFiles/twigTest_01';

export default function RhoGui() {
  return <JSONTree data={testIsValidTwigTrunkChinese_02}/>
}
