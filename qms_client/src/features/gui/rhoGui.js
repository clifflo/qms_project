import JSONTree from 'react-json-tree';
import * as R from 'ramda';
import {
  getTwigElementalViewingMyselfContextChinese
} from '../calculations/twigFiles/twigHub';

export default function RhoGui() {
  return <JSONTree
    data={getTwigElementalViewingMyselfContextChinese(
      '五行金', '五行土'
    )}/>
}
