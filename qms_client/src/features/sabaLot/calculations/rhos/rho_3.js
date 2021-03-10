import * as R from 'ramda';
import {
  longHooks_1
} from './rho_1';
import {
  decimalToBinary,
  binaryToDecimal,
  getIndexedList
} from '../utils/util_3';

const baseHookSeriesSentence =
  '姤,遯,否,觀,剝,晉,大有';

const baseHookSeriesRaw =
  R.split(',', baseHookSeriesSentence);

const baseHookSeriesIndexed =
  getIndexedList(baseHookSeriesRaw);

export const getLongHookNumber = (longHookName) => {

  const longHookContext = R.find(
    R.propEq('longHookName', targetLongHookName),
    longHooks_1);

  if(R.isNil(longHookContext)){
    throw new Error(`${longHookName} is not a valid long hook.`);
  }

  return longHookContext.longHookNumber;
}

export const getHookGapBinarySet = () => {

  const sourceLongHookNumber = 63;

  const mapFn = (targetLongHookName) => {

    const targetLongHookNumber =
      R.find(
        R.propEq('longHookName', targetLongHookName),
        longHooks_1)
        .longHookNumber;

    const gapBinary = decimalToBinary(
      sourceLongHookNumber ^ targetLongHookNumber,
      6);

    return gapBinary;
  }

  const baseHookSeries

  return R.map(mapFn, baseHookSeries);
}

export const hookGapSeries = getHookGapSeries();

export const getHookSeries = () => {

  const numberFn = (shortHookName) => {
    try{
      const pureHookName = '純' + shortHookName;
      const pureHookNumber = getLongHookNumber(pureHookName);
      return pureHookNumber;
    }
    catch(err){
      console.log(err);
      throw new Error('Cannot get pure hook number.');
    }
  }

  const mapFn = (longHookNumber, gapBinary) => {

    const gapDecimal = binaryToDecimal(gapBinary);

  }


}
