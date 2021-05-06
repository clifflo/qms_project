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

// 't' is tester.
const epsl_0004t = dlcxt_2 => {

  const jackCross = dhJack(dhcxt_2);
  const kingCross = dhKing(dhcxt_2);

  const elre = getElre(
    jackCross.crbel, kingCross.crbel);

  return isElreBank(elre);
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
