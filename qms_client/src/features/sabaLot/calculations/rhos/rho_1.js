import * as R from 'ramda';

const natoSentences =
  '乾金甲子壬,坎水戊寅也,艮土丙辰也，震木庚子也,' +
  '巽木辛丑也,离火己卯也,坤土乙未癸，兑金丁巳也';

const getNatos = () => {

  const mapFn = (sentence) => {
    const longHook = sentence[0];
    const longHookElemental = sentence[1];
    const externalTrunk = sentence[2];
    const salt = sentence[3];
    const internalTrunk = sentence[4] == '也' ?
      externalTrunk : sentence[4];
    return {
      longHook,
      longHookElemental,
      externalTrunk,
      salt,
      internalTrunk
    };
  }

  return R.compose(
    R.map(mapFn),
    R.split(','))
    (natoSentences);
}

export const natos = getNatos();
