import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhocs_2
} from './rho_02';
import {
  nattos,
  gshoriOrder
} from './rho_01';
import {
  utGetIdx
} from '../../utils/util_01';
import {
  getElre
} from '../../twigs/twig_01';
import {
  getRcxtvByLhn,
  getRcxt1ByLhn,
  getRcxt1ByLhx
} from './rho_03';
import {
  decimalToBinary,
  binaryToDecimal
} from '../../utils/util_02';

// Rho base long hook series set
const rblhss =
  R.split(',', '姤,遯,否,觀,剝,晉,大有');

const getRhgbs = () => {

  const sLhidx = 63;

  const mapFn = tLhname => {

    const tLhidx =
      getRcxt1ByLhn(tLhname)
      .lhidx;

    if(R.isNil(tLhidx)){
      throw new Error(
        'Target LHIDX should not be nil.');
    }

    if(!RA.isNumber(tLhidx)){
      throw new Error(
        'How come the long hook '
        + 'index becomes a string?');
    }

    const gapBinary = decimalToBinary(
      sLhidx ^ tLhidx,
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

export const rhgbs = getRhgbs();

const getRhksrs = () => {

  const mapFn_1 =
    (gshori, gapBinary, index) => {

    try{

      const gapDecimal = binaryToDecimal(gapBinary);

      const rhlhn = '純' + gshori;
      const rhlix =
        getRcxt1ByLhn(rhlhn)
        .lhidx;

      if(R.isNil(rhlix)){
        throw new Error(
          'RHLIX should not be nil.');
      }

      const rglhi = gapDecimal ^ rhlix;
      const rglct1 =
        getRcxt1ByLhx(rglhi);

      return rglct1.lhname;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Error in getting hook series.')
    }
  }

  const mapFn_1c = R.curry(mapFn_1);

  const mapFn_2 = gshori => {

    const rlhkss_1 = RA.mapIndexed(
      mapFn_1c(gshori), rhgbs);

    const rlhkss_2 = R.prepend(
      '純' + gshori, rlhkss_1);

    return {
      rhshn: gshori,
      rlhkss: rlhkss_2
    }
  }

  const result = R.map(
    mapFn_2, gshoriOrder);

  return result;
}

export const rhksrs = getRhksrs();
