import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  rhoB
}

const buildRhoCommonLongHookSeries = (
  genericShortHookOriginal,
  rawRhoLongHookGapBinaryDigits)  => {

  const rhoLongHookGapDecimal =
    binaryToDecimal(
      rawRhoLongHookGapBinaryDigits);

  const rhoLongHookSeriesHeadName =
    '純' + genericShortHookOriginal;

  const rhoLongHookSeriesHeadContext_1 =
    getRhoContextByLongHookName_1(
      rhoLongHookSeriesHeadName);

  const rhoLongHookSeriesHeadIndex =
    rhoLongHookSeriesHeadContext_1
    .longHookIndex;

  const rhoLongHookSeriesStaffIndex =
    rhoLongHookGapDecimal ^
    rhoLongHookSeriesHeadIndex;

  const rhoLongHookSeriesStaffContext =
    getRhoContextByLongHookName_1(
      rhoLongHookSeriesStaffIndex);

  return rhoLongHookSeriesStaffContext
    .longHookName;
}

const getRhoGlobalLongHookSeriesSet = () => {

  const mapFn_1 =
    (genericShortHookOriginal, rgbnry) => {

    try{

      const rgdecm = binaryToDecimal(rgbnry);
      const rhlhn = '純' + genericShortHookOriginal;
      const rhlix =
        getRhoContext1ByLongHookName(rhlhn)
        .lhidx;

      if(R.isNil(rhlix)){
        throw new Error(
          '[rhlix] should not be nil.');
      }

      const rglhi = rgdecm ^ rhlix;
      const rglct1 = getRcxt1ByLhx(rglhi);

      return rglct1.longHookName;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Error in getting hook series.')
    }
  }

  const mapFn_1c = R.curry(mapFn_1);

  const mapFn_2 = genericShortHookOriginal => {

    const rlhst = RA.mapIndexed(
      mapFn_1c(genericShortHookOriginal), rhgbs);

    const rlhsf = R.prepend(
      '純' + genericShortHookOriginal, rlhst);

    return {
      _type: 'rlhsc',
      rhlhn: genericShortHookOriginal,
      rlhsf: rlhsf
    }
  }

  const result = R.map(
    mapFn_2, gshoro);

  return result;
}

export const rlhsl = getRlhsl();
