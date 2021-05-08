import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  decimalToBinary
} from '../../utils/util_02';
import {
  rhocs_1
} from './rho_02';
import {
  getTrnto,
  buildCrosses
} from './rho_03';
import {
  getTwigElemc
} from '../../twigs/twig_02';

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
      const externalSnapPeass = eshcot.dbbrs;

      // External short hook bean trunk
      const externalShortHookTrunk = eshcot.dshbt;

      const eshele = eshcot.genericShortHookElemental;

      // Internal bean branch series
      const internalSnapPeas = ishcot.dbbrs;

       // Internal short hook bean trunk
      const internslShortHookTrunk = ishcot.dshbt;

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

  return R.map(mapFn, rhocs_1)
}

export const rhocs_2 = getRhoContextSet_2();
