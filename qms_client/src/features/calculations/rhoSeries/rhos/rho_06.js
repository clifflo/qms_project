import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhocs_2
} from './rho_02';
import {
  nattos,
  gshoro
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
} from './rho_05';
import {
  decimalToBinary,
  binaryToDecimal
} from '../../utils/util_02';

// Rho base long hook series set
const rblhss =
  R.split(',', '姤,遯,否,觀,剝,晉,大有');

const getRhgbs = () => {

  const slhidx = 63;

  const mapFn = tlhna => {

    const tlhidx =
      getRcxt1ByLhn(tlhna)
      .lhidx;

    if(R.isNil(tlhidx)){
      throw new Error(
        'TLHIDX should not be nil.');
    }

    if(!RA.isNumber(tlhidx)){
      throw new Error(
        'How come the long hook '
        + 'index becomes a string?');
    }

    const rgbnry = decimalToBinary(
      slhidx ^ tlhidx,
      6);

    return rgbnry;
  }

  try{

    const rhgbs = R.compose(
      R.uniq,
      R.map(mapFn))
    (rblhss)

    if(rhgbs.length != 7){
      throw new Error(
        'It must have 7 unique rho hook '
        + 'gap binaries only but now it has '
        + rhgbs.length + '.');
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

const getRlhsl = () => {

  const mapFn_1 =
    (gshori, rgbnry) => {

    try{

      const rgdecm = binaryToDecimal(rgbnry);
      const rhlhn = '純' + gshori;
      const rhlix =
        getRcxt1ByLhn(rhlhn)
        .lhidx;

      if(R.isNil(rhlix)){
        throw new Error(
          '[rhlix] should not be nil.');
      }

      const rglhi = rgdecm ^ rhlix;
      const rglct1 = getRcxt1ByLhx(rglhi);

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

    const rlhst = RA.mapIndexed(
      mapFn_1c(gshori), rhgbs);

    const rlhsf = R.prepend(
      '純' + gshori, rlhst);

    return {
      _type: 'rlhsc',
      rhlhn: gshori,
      rlhsf: rlhsf
    }
  }

  const result = R.map(
    mapFn_2, gshoro);

  return result;
}

export const rlhsl = getRlhsl();
