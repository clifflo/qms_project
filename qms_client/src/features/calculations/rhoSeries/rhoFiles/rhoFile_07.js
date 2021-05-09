import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  decimalToBinary
} from '../../utilityFiles/utilityHub';
import {
  getNattoNoodle
} from './rhoMiniHub_01';

const rhoContextMapFunction_2 = rhoContext_1 => {

  try{
    const externalShortHookBinaryDigits =
      decimalToBinary(
        rhoContext_1
        .externalShortHookIndex,
        3);

    const internalShortHookBinaryDigits =
      decimalToBinary(
        rhoContext_1
        .internalShortHookIndex,
        3);

    const externalNattoNoodle =
      getNattoNoodle()
  }
  catch(errorMessage){

  }
}

export const getRhoContextSet_2 = () => {

  const mapFn = rhocxt => {

    try{
      const eshBinary = decimalToBinary(
        rhocxt.eshidx, 3);
      const ishBinary = decimalToBinary(
        rhocxt.ishidx, 3);

      // External short hook content
      const eshcot = getTrnto(
        rhocxt.eshori, true);
      E.cknwo(eshcot, 'eshcot');

      // Internal short hook content
      const ishcot = getTrnto(
        rhocxt.ishori, false);
      E.cknwo(ishcot, 'eshcot');

      // External bean branch series
      const externalSnapPeass = eshcot.effectiveSnapPeas;

      // External short hook bean trunk
      const externalShortHookTrunk = eshcot.effectiveShortHookTrunk;

      const eshele = eshcot.genericShortHookElemental;

      // Internal bean branch series
      const internalSnapPeas = ishcot.effectiveSnapPeas;

       // Internal short hook bean trunk
      const internslShortHookTrunk = ishcot.effectiveShortHookTrunk;

      const ishele = ishcot.genericShortHookElemental;

      E.checkNilWithArray(externalSnapPeass, 'externalSnapPeass');
      E.checkNilWithString(externalShortHookTrunk, 'externalShortHookTrunk');
      E.checkNilWithString(eshele, 'eshele');
      E.checkNilWithArray(internalSnapPeas, 'internalSnapPeas');
      E.checkNilWithString(internslShortHookTrunk, 'internslShortHookTrunk');
      E.checkNilWithString(ishele, 'ishele');

      const fullSnapPeass = R.concat(externalSnapPeass, internalSnapPeas);

      const lhBinary = decimalToBinary(
        rhocxt.lhidx,
        6);

      const mapFn = R.curry(buildCrosses)
        (fullSnapPeass)
        (externalShortHookTrunk)
        (internslShortHookTrunk);

      const lhcrsl = RA.mapIndexed(
        mapFn,
        R.drop(1, lhBinary));

      return {
        longHookName: rhocxt.longHookName,
        eshori: rhocxt.eshori,
        ishori: rhocxt.ishori,
        ishele,
        eshele,
        lhcrsl
      }
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Cannot build bean branch series.');
    }

  }

  return R.map(mapFn, rhoContextSet_1)
}

export const rhoContextSet_2 = getRhoContextSet_2();
