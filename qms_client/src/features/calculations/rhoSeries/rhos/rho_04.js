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

export const getRhocs_2 = () => {

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
      const ebbrs = eshcot.dbbrs;

      // External short hook bean trunk
      const eshbt = eshcot.dshbt;

      const eshele = eshcot.gshele;

      // Internal bean branch series
      const ibbrs = ishcot.dbbrs;

       // Internal short hook bean trunk
      const ishbt = ishcot.dshbt;

      const ishele = ishcot.gshele;

      E.cknwa(ebbrs, 'ebbrs');
      E.cknws(eshbt, 'eshbt');
      E.cknws(eshele, 'eshele');
      E.cknwa(ibbrs, 'ibbrs');
      E.cknws(ishbt, 'ishbt');
      E.cknws(ishele, 'ishele');

      const fbbrs = R.concat(ebbrs, ibbrs);

      const lhBinary = decimalToBinary(
        rhocxt.lhidx,
        6);

      const mapFn = R.curry(buildCrosses)
        (fbbrs)
        (eshbt)
        (ishbt);

      const lhcrsl = RA.mapIndexed(
        mapFn,
        R.drop(1, lhBinary));

      return {
        lhname: rhocxt.lhname,
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

export const rhocs_2 = getRhocs_2();
