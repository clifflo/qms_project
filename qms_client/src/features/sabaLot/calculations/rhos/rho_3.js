import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  longHookContexts_1,
  shortHookOriginalSentence
} from './rho_1';
import {
  decimalToBinary,
  binaryToDecimal,
  getIndexedList
} from '../utils/util_3';

const baseHookSeriesSentence =
  '姤,遯,否,觀,剝,晉,大有';

const baseHookSeries =
  R.split(',', baseHookSeriesSentence);

export const getLongHookContextByName = (longHookName) => {

  const longHookContext = R.find(
    R.propEq('longHookName', longHookName),
    longHookContexts_1);

  if(R.isNil(longHookContext)){
    throw new Error(`${longHookName} is not a valid long hook.`);
  }

  return longHookContext;
}

export const getLongHookContextByNumber = (longHookNumber) => {

  const longHookContext = R.find(
    R.propEq('longHookNumber', longHookNumber),
    longHookContexts_1);

  if(R.isNil(longHookNumber)){
    throw new Error('Long hook number should not be nil.');
  }

  if(!RA.isNumber(longHookNumber)){
    throw new Error(`Long hook number must be a number.`);
  }

  if(R.isNil(longHookContext)){
    throw new Error(
      `${longHookNumber} is not a valid long hook number.`);
  }

  return longHookContext;
}

export const getHookGapBinarySet = () => {

  const sourceLongHookNumber = 63;

  const mapFn = (targetLongHookName) => {

    const targetLongHookNumber =
      getLongHookContextByName(targetLongHookName)
      .longHookNumber;

    const gapBinary = decimalToBinary(
      sourceLongHookNumber ^ targetLongHookNumber,
      6);

    return gapBinary;
  }

  try{
    return R.map(mapFn, baseHookSeries);
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get hook gap binary set.');
  }

}

export const hookGapBinarySet = getHookGapBinarySet();

export const getHookSeries = () => {

  const mapFn_1 = (shortHookName, gapBinary, index) => {

    try{
      const gapDecimal = binaryToDecimal(gapBinary);
      const pureHookName = '純' + shortHookName;
      const pureHookNumber =
        getLongHookContextByName(pureHookName)
        .longHookNumber;
      const pureHookBinary = decimalToBinary(pureHookNumber, 6);
      const resultHookNumber = gapDecimal ^ pureHookNumber;
      const resultHookContext =
        getLongHookContextByNumber(resultHookNumber);

      return resultHookContext.longHookName;
    }
    catch(err){
      console.error(err);
      throw new Error('Error in getting hook series.')
    }
  }

  const mapFn_1_curried = R.curry(mapFn_1);

  const mapFn_2 = (shortHookName) => {

    const rawSeries = RA.mapIndexed(
      mapFn_1_curried(shortHookName), hookGapBinarySet);

    const finalSeries = R.prepend(
      '純' + shortHookName, rawSeries);

    const seriesSentence = R.join(',', finalSeries);

    return {
      shortHookName,
      seriesSentence
    }
  }

  const result = R.map(mapFn_2, shortHookOriginalSentence);

  return result;
}
