import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  dhJack,
  dhQueen,
  dhKing
} from '../deltas/delta_07';
import {
  getElre,
  isElreBank
} from '../../twigs/twig_02';
import {
  isDeltaSon
} from '../rhos/'

// 't' is tester.
const epsl_0004t = dlcxt_2 => {

  const findFn = wbcros => {
    return isDeltaSon(wbcros.dfcen)
      && wbcros.isStrike;
  }

  const result = R.any(
    findFn, dlcxt_2.wbowcl));

  return result;
}

// 'd' id description.
const epsl_0004m = {
  epslId: '0004',
  epslChapter: '闡奧歌章',
  epslTitle: '禾苗田地章',
  epslContent: [
    '發動子孫為天福'
  ]
}

export const epsl_0004c = {
  epslTestFn: epsl_0004t,
  epslMetadata: epsl_0004d
}
