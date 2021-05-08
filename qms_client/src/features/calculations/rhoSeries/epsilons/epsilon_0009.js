import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  isDeltaSon
} from '../deltas/delta_07';

// 't' is tester.
const epsl_0008t = dlcxt => {

  const findFn = wbcros => {
    return R.allPass([
      isDeltaGhost(wbcros.dfcen),

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
const epsl_0008m = {
  epslId: '0008',
  epslChapter: '闡奧歌章',
  epslTitle: '禾苗田地章',
  epslContent: [
    '交重官鬼應難斷，金鬼蝗蟲[火鬼旱]，',
    '大殺同宮總不收，發動喜神猶減半。'
  ],
  epslFootnote: [
    '天符和唐符相同。'
  ]
}

export const epsl_0008c = {
  epslTestFn: epsl_0008t,
  epslMetadata: epsl_0008d
}
