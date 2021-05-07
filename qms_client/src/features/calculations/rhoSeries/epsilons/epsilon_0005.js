import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isDeltaSon
} from '../deltas/delta_07';

// 't' is tester.
const epsl_0005t = dlcxt => {

  const findFn = wbcros => {
    return R.allPass([
      isDeltaSon(wbcros.dfcen),
      wbcros.isStrike,
      isDeltaDragon(wbcros.dplen);
    ]);
  }

  const result = R.any(
    findFn, dlcxt.wbowcl));

  return result;
}

// 'd' id description.
const epsl_0005m = {
  epslId: '0005',
  epslChapter: '闡奧歌章',
  epslTitle: '禾苗田地章',
  epslContent: [
    '(發動子孫為天福),'
    '更得青龍天喜重,',
    '高低遠近皆成熟'
  ]
}

export const epsl_0005c = {
  epslTestFn: epsl_0005t,
  epslMetadata: epsl_0005d
}
