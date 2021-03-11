import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  lhContexts_1,
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

const getLhContextByName = (longHookName) => {

  const lhContext = R.find(
    R.propEq('longHookName', longHookName),
    lhContexts_1);

  if(R.isNil(lhContext)){
    throw new Error(`${longHookName} is not a valid long hook.`);
  }

  return lhContext;
}

const getLhContextByNumber = (longHookNumber) => {

  const lhContext = R.find(
    R.propEq('longHookNumber', longHookNumber),
    lhContexts_1);

  if(R.isNil(longHookNumber)){
    throw new Error('Long hook number should not be nil.');
  }

  if(!RA.isNumber(longHookNumber)){
    throw new Error(`Long hook number must be a number.`);
  }

  if(R.isNil(lhContext)){
    throw new Error(
      `${longHookNumber} is not a valid long hook number.`);
  }

  return lhContext;
}

const getHookGapBinarySet = () => {

  const sourceLongHookNumber = 63;

  const mapFn = (targetLongHookName) => {

    const targetLongHookNumber =
      getLhContextByName(targetLongHookName)
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

const hookGapBinarySet = getHookGapBinarySet();

const getHookPalaces = () => {

  const mapFn_1 = (shortHookName, gapBinary, index) => {

    try{
      const gapDecimal = binaryToDecimal(gapBinary);
      const pureHookName = '純' + shortHookName;
      const pureHookNumber =
        getLhContextByName(pureHookName)
        .longHookNumber;
      const pureHookBinary = decimalToBinary(pureHookNumber, 6);
      const resultHookNumber = gapDecimal ^ pureHookNumber;
      const resultHookContext =
        getLhContextByNumber(resultHookNumber);

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
      headHook: shortHookName,
      seriesSentence
    }
  }

  const result = R.map(mapFn_2, shortHookOriginalSentence);
  return result;
}

const hookPalaces = getHookPalaces();

const buildJackIndex = (localPalaceIndex) => {

  const mapper = {
    0: 5,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 3,
    7: 2
  }

  const upwardIndex = mapper[localPalaceIndex];
  const downwardIndex = 5 - upwardIndex;
  return downwardIndex;
}

const getLhContexts_3 = () => {

  const mapFn_1 = (
    hookPalace,
    longHookName,
    localPalaceIndex) => {

    try{

      const jackIndex = buildJackIndex(localPalaceIndex);
      const kingIndex = (jackIndex + 3) % 6;

      return {
        longHookName,
        headHook: hookPalace.headHook,
        localPalaceIndex,
        jackIndex,
        kingIndex
      }
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Map function 2 error for get hook palace set 2.');
    }

  }

  const mapFn_1_curried = R.curry(mapFn_1);

  const mapFn_2 = (hookPalace) => {

    try {
      const series = R.split(',', hookPalace.seriesSentence);
      const result = RA.mapIndexed(
        mapFn_1_curried(hookPalace),
        series);
      return result;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Map function 2 error for get hook palace set 2.')
    }

  }

  const nestedList = R.map(mapFn_2, hookPalaces);
  const flatList = R.flatten(nestedList);
  return flatList;
}


export const lhContexts_3 = getLhContexts_3();
