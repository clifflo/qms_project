import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  dhJack,
  dhQueen,
  dhKing
} from '../deltas/delta_07';
import {
  getElementalCorrelation,
  isErcoEitherSeed
} from '../../twigs/twig_02';

// 't' is tester.
const epsl_0001t = dlcxt_2 => {

  const jackCross = dhJack(dhcxt_2);
  const kingCross = dhKing(dhcxt_2);

  const elementalCorrelation = getElementalCorrelation(
    jackCross.crbelc, kingCross.crbelc);

  return isErcoEitherSeed(elementalCorrelation);
}

// 'd' id description.
const epsl_0001m = {
  epslId: '0001',
  epslChapter: '闡奧歌章',
  epslTitle: '禾苗田地章',
  epslContent: [
    '應為種子世為田，世應相生獲萬全'
  ]
}

export const epsl_0001c = {
  epslTestFn: epsl_0001t,
  epslMetadata: epsl_0001d
}
