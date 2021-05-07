import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isDeltaSon
} from '../deltas/delta_07';

// 't' is tester.
const epsl_0005t = dlcxt_2 => {

  const findFn = wbcros => {
    return isDeltaSon(wbcros.dfcen)
      && wbcros.isStrike;
  }

  const result = R.any(
    findFn, dlcxt_2.wbowcl));

  return result;
}

// 'd' id description.
const epsl_0005m = {
  epslId: '0005',
  epslChapter: '闡奧歌章',
  epslTitle: '禾苗田地章',
  epslContent: [
    '(發動子孫為天福),'
    '更得青龍天喜重'
  ]
}

export const epsl_0005c = {
  epslTestFn: epsl_0005t,
  epslMetadata: epsl_0005d
}
