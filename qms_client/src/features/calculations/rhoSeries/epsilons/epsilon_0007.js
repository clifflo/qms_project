import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isDeltaSon
} from '../deltas/delta_07';

// 't' is tester.
const epsl_0007t = dlcxt => {

  const findFn = wbcros => {
    return R.allPass([
      isDeltaMoney(wbcros.dfcen),
      isDeltaDragon(wbcros.dplen),
      wbcros.isStrike,
      // has brake 唐符
      // do not have brakes 大耗 and 小耗
    ]);
  }

  const result = R.any(
    findFn, dlcxt.wbowcl));

  return result;
}

// 'd' id description.
const epsl_0007m = {
  epslId: '0007',
  epslChapter: '闡奧歌章',
  epslTitle: '禾苗田地章',
  epslContent: [
    '子孫發動合天符，[財與龍爻出現枝]，'
    '無殺無衝倉廩實，若逢二耗卻成虛。'
  ],
  epslFootnote: [
    '天符和唐符相同。'
  ]
}

export const epsl_0007c = {
  epslTestFn: epsl_0007t,
  epslMetadata: epsl_0007d
}
