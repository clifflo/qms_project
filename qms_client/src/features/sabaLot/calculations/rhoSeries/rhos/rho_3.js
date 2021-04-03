import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhocs_1,
  shoriSce
} from './rho_1';
import {
  decimalToBinary,
  binaryToDecimal
} from '../utils/util_2';

const baseHookSeriesSce =
  '姤,遯,否,觀,剝,晉,大有';

const baseHookSeries =
  R.split(',', baseHookSeriesSce);

const getLhcByLhn = (lhName) => {

  const lhContext = R.find(
    R.propEq('lhName', lhName),
    rhocs_1);

  if(R.isNil(lhContext)){
    throw new Error(
      `${lhName} is not a valid long hook.`);
  }

  return lhContext;
}

export const getLhcByIdx = lhIdx => {

  const lhContext = R.find(
    R.propEq('lhIdx', lhIdx),
    rhocs_1);

  if(R.isNil(lhIdx)){
    throw new Error(
      'Long hook number should not be nil.');
  }

  if(!RA.isNumber(lhIdx)){
    throw new Error(
      'Long hook number must be a number.');
  }

  if(R.isNil(lhContext)){
    throw new Error(
      `${lhIdx} is not a valid long hook number.`);
  }

  return lhContext;
}

const getHgbs = () => {

  const sourceLhIdx = 63;

  const mapFn = (targetLhName) => {

    const targetLhIdx =
      getLhcByLhn(targetLhName)
      .lhIdx;

    if(R.isNil(targetLhIdx)){
      throw new Error(
        'Target long hook number should not be nil.');
    }

    if(!RA.isNumber(targetLhIdx)){
      throw new Error(
        'How come the Long Hook '
        + 'Index becomes a string?');
    }

    const gapBinary = decimalToBinary(
      sourceLhIdx ^ targetLhIdx,
      6);

    return gapBinary;
  }

  try{
    // Hook Gap Binary Set
    const hgbs_1 = R.map(mapFn, baseHookSeries);
    const hgbs_2 = R.uniq(hgbs_1);

    if(hgbs_2.length != 7){
      throw new Error(
        'It must be seven hook gap binaries'
        + 'only but now we have '
        + hgbs_2.length
        + 'of them, how come?');
    }

    return R.map(mapFn, baseHookSeries);
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get hook gap binary set.');
  }

}

// Hook Gap Binaries Set
const hgbs = getHgbs();

const getRhpals = () => {

  const mapFn_1 =
    (shortHookName, gapBinary, index) => {

    try{
      const gapDecimal = binaryToDecimal(gapBinary);

      // Pure Hook Name
      const puhName = '純' + shortHookName;
      const puhNumber =
        getLhcByLhn(puhName)
        .lhIdx;

      if(R.isNil(puhNumber)){
        throw new Error(
          'Pure hook number should not be nil.');
      }

      const puhBinary = decimalToBinary(puhNumber, 6);
      const resultHookNumber = gapDecimal ^ puhNumber;
      const resultHookContext =
        getLhcByIdx(resultHookNumber);

      return resultHookContext.lhName;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Error in getting hook series.')
    }
  }
  const mapFn_1_curried = R.curry(mapFn_1);

  const mapFn_2 = (shortHookName) => {

    const rawSeries = RA.mapIndexed(
      mapFn_1_curried(shortHookName), hgbs);

    const finalSeries = R.prepend(
      '純' + shortHookName, rawSeries);

    const seriesSce = R.join(',', finalSeries);

    return {
      rhHook: shortHookName,
      seriesSce
    }
  }

  const result = R.map(mapFn_2, shoriSce);
  return result;
}

// Rho Hook Palaces
const rhpals = getRhpals();

const buildRjackIdx = (lpalIndex) => {

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

  const upwardIndex = mapper[lpalIndex];
  const downwardIndex = 5 - upwardIndex;
  return downwardIndex;
}

const getRhocs_3 = () => {

  const mapFn_1 = (
    rhkpal,
    lhName,
    lpalIndex) => {

    try{

      const rhojkIdx = buildRjackIdx(lpalIndex);
      const rhokgIdx = (rhojkIdx + 3) % 6;

      return {
        lhName,
        rhHook: rhkpal.rhHook,
        lpalIndex,
        rhojkIdx,
        rhokgIdx
      }
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Map function 2 error for '
        + 'get Hook Palace Set 2.');
    }

  }

  const mapFn_1_curried = R.curry(mapFn_1);

  const mapFn_2 = rhkpal => {

    try {
      const series = R.split(',', rhkpal.seriesSce);
      const result = RA.mapIndexed(
        mapFn_1_curried(rhkpal),
        series);
      return result;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Map function 2 error for get '
        + 'Rho Hook Palace Set 2.')
    }

  }

  const nestedList = R.map(mapFn_2, rhpals);

  const flatList = R.flatten(nestedList);
  return flatList;
}


export const rhocs_3 = getRhocs_3();
