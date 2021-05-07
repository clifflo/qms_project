import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  dhJack,
  dhQueen,
  dhKing
} from '../deltas/delta_07';
import {
  getElre,
  isElreHacker
} from '../../twigs/twig_02';

// 't' is tester.
const epsl_0001t = dlcxt_2 => {

  const jackCross = dhJack(dhcxt_2);
  const kingCross = dhKing(dhcxt_2);

  const elre = getElre(
    jackCross.crbelc, kingCross.crbelc);

  return isElreHacker(elre);
}

// 'd' id description.
const epsl_0002m = {
  epslId: '0002',
  epslChapter: '闡奧歌章',
  epslTitle: '禾苗田地章',
  epslContent: [
    '(應為種子世為田)，',
    '種子剋田猶小吉(應尅世)'
  ]
}

export const epsl_0002c = {
  epslTestFn: epsl_0002t,
  epslMetadata: epsl_0002d
}
