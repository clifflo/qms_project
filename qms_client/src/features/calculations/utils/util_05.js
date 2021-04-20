import {
  reggen_5
} from './util_04';
import * as R from 'ramda';

export const reggen_6 = rawsen => {

  const adjsen = rawsen
    .replaceAll('犬', '狗')
    .replaceAll('十一', '霜')
    .replaceAll('十二', '臘')
    .replaceAll('、', '');

  const mapFn = regcxt => {

    const patt = new RegExp(regcxt.regex, 'g');

    // Brake matches
    const bkmhes = [...adjsen.matchAll(patt)];

    return {
      adjsen,
      bkmhes,
      ...regcxt
    }
  }

  return R.map(mapFn, reggen_5());
}

export const reggen_7 = sentence => {

  const regg6s = reggen_6(sentence);
  const maxFn = regge6 => {
    return regge6.bkmhes.length;
  }

  // Monthy calculation
  const mthcoa = R.includes('正', sentence);
  const mthcob = R.includes('月', sentence);

  const regge7 =
    R.reduce(
      R.maxBy(maxFn),
      { bkmhes: [] },
      regg6s);

  return {
    mthcoa,
    mthcob,
    ...regge7
  };
}
