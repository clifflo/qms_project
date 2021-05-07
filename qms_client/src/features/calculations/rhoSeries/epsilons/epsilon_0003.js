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
const epsl_0003t = dlcxt_2 => {

  const jackCross = dhJack(dhcxt_2);
  const kingCross = dhKing(dhcxt_2);

  const elre = getElre(
    jackCross.crbel, kingCross.crbel);

  return isElreBank(elre);
}

// 'd' id description.
const epsl_0003m = {
  epslId: '0003',
  epslChapter: '闡奧歌章',
  epslTitle: '禾苗田地章',
  epslContent: [
    '(應為種子世為田),',
    '世來剋應儉時年'
  ]
}

export const epsl_0003c = {
  epslTestFn: epsl_0003t,
  epslMetadata: epsl_0003d
}
