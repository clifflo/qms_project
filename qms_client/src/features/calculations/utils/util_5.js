import {
  reggen_5
} from './util_4';

export const reggen_6 = rawStce => {

  const adjdStce = rawStce
    .replaceAll('犬', '狗')
    .replaceAll('十一', '霜')
    .replaceAll('十二', '臘')
    .replaceAll('、', '');

  const mapFn = regcxt => {
    const patt = new RegExp(regcxt.regex, 'g');

    // Brake matches
    const bkmhes =  [...adjdStce.matchAll(patt)]
    return {
      adjdStce,
      bkmhes,
      ...regcxt
    }
  }

  return R.map(mapFn, reggen_5());
}

export const reggen_7 = sen_1 => {

  const regg_6s = reggen_6(sen_1);
  const maxFn = regg_6 => {
    return regg_6.bkmhes.length;
  }

  const regg_7 =
    R.reduce(
      R.maxBy(maxFn),
      { bkmhes: [] },
      regg_6s);

  return regg_7;
}
