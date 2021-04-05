import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhocs_1,
  shkorOrder,
  getRcxt1ByLhn,
  getRcxt1ByLx
} from './rho_1';
import {
  decimalToBinary,
  binaryToDecimal
} from '../../utils/util_2';

const rblhss =
  R.split(',', '姤,遯,否,觀,剝,晉,大有');

const getRhgbs = () => {

  const sourceLhIdx = 63;

  const mapFn = (targetLhName) => {

    const targetLhIdx =
      getRcxt1ByLhn(targetLhName)
      .lhidx;

    if(R.isNil(targetLhIdx)){
      throw new Error(
        'Target long hook number should not be nil.');
    }

    if(!RA.isNumber(targetLhIdx)){
      throw new Error(
        'How come the long hook '
        + 'index becomes a string?');
    }

    const gapBinary = decimalToBinary(
      sourceLhIdx ^ targetLhIdx,
      6);

    return gapBinary;
  }

  try{

    const rhgbs_1 = R.map(mapFn, rblhss);
    const rhgbs_2 = R.uniq(rhgbs_1);

    if(rhgbs_2.length != 7){
      throw new Error(
        'It must have 7 Rho hook gap binaries'
        + 'only but now it has '
        + rhgbs_2.length + '.');
    }

    return R.map(mapFn, rblhss);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Rho hook gap binaries set.');
  }

}

const rhgbs = getRhgbs();

const getRhpals = () => {

  const mapFn_1 =
    (gshkor, gapBinary, index) => {

    try{

      const gapDecimal = binaryToDecimal(gapBinary);

      const rhlhn = '純' + gshkor;
      const rhlix =
        getRcxt1ByLhn(rhlhn)
        .lhidx;

      if(R.isNil(rhlix)){
        throw new Error(
          'RHLIX should not be nil.');
      }

      const rglhi = gapDecimal ^ rhlix;
      const rglct1 =
        getRcxt1ByLx(rglhi);

      return rglct1.lhname;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Error in getting hook series.')
    }
  }

  const mapFn_1c = R.curry(mapFn_1);

  const mapFn_2 = gshkor => {

    const rlhkss_1 = RA.mapIndexed(
      mapFn_1c(gshkor), rhgbs);

    const rlhkss_2 = R.prepend(
      '純' + gshkor, rlhkss_1);

    const rlhkss_3 = R.join(',', rlhkss_2);

    return {
      rhhook: gshkor,
      rlhkss_3
    }
  }

  const result = R.map(mapFn_2, shkorOrder);
  return result;
}

const rhpals = getRhpals();

const buildRjackIdx = (rlhgn) => {

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

  const lhcuwi = mapper[rlhgn];
  const lhcdwi = 5 - lhcuwi;
  return lhcdwi;
}

const getRhocs_3 = () => {

  const mapFn_1 = (
    rhkpal,
    lhname,
    rlhgn) => {

    try{

      const rhojki = buildRjackIdx(rlhgn);
      const rhokgi = (rhojki + 3) % 6;

      return {
        lhname,
        rhhook: rhkpal.rhhook,
        rlhgn,
        rhojki,
        rhokgi
      }
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Map function 2 error for '
        + 'get hook palace set 2.');
    }

  }

  const mapFn_1_curried = R.curry(mapFn_1);

  const mapFn_2 = rhkpal => {

    try {
      const series = R.split(
        ',', rhkpal.rlhkss_3);
      const result = RA.mapIndexed(
        mapFn_1_curried(rhkpal),
        series);
      return result;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Map function 2 error for get '
        + 'Rho hook palace set 2.')
    }

  }

  const nestedList = R.map(mapFn_2, rhpals);

  const flatList = R.flatten(nestedList);
  return flatList;
}

export const rhocs_3 = getRhocs_3();
