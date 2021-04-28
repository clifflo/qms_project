import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
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
  getElem
} from '../../twigs/twig_02';

export const getRhocs_2 = () => {

  const mapFn = rhocxt => {

    try{
      const eshBinary = decimalToBinary(
        rhocxt.eshidx, 3);
      const ishBinary = decimalToBinary(
        rhocxt.ishidx, 3);

      let ebbrs; // External bean branch series
      let eshbt; // External short hook bean trunk
      let ibbrs; // Internal bean branch series
      let ishbt; // Internal short hook bean trunk

      // External short hook content
      const eshcot = getTrnto(
        rhocxt.eshori, true);

      // Internal short hook content
      const ishcot = getTrnto(
        rhocxt.ishori, false);

      if(R.isNil(eshcot)){
        throw new Error(
          'ESHCOT should not be nil.');
      }

      if(R.isNil(ishcot)){
        throw new Error(
          'ISHCOT should not be nil.');
      }

      ebbrs = eshcot.lbbrs;
      eshbt = eshcot.lshbt;
      ibbrs = ishcot.lbbrs;
      ishbt = ishcot.lshbt;

      if(R.isNil(ebbrs)){
        throw new Error(
          'EBBRS should not be nil.')
      }

      if(R.isNil(ibbrs)){
        throw new Error(
          'IBBRS should not be nil.')
      }

      if(R.isNil(eshbt)){
        throw new Error(
          'ESHBT should not be nil.');
      }

      if(R.isNil(ishbt)){
        throw new Error(
          'ISHBT should not be nil.');
      }

      const fbbrs = R.concat(ebbrs, ibbrs);

      const lhBinary = decimalToBinary(
        rhocxt.lhidx,
        6);

      const mapFn = R.curry(buildCrosses)
        (fbbrs)
        (eshbt)
        (ishbt);

      const lhcres = RA.mapIndexed(
        mapFn,
        R.drop(1, lhBinary));

      return {
        lhname: rhocxt.lhname,
        eshori: rhocxt.eshori,
        ishori: rhocxt.ishori,
        lhcres
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
