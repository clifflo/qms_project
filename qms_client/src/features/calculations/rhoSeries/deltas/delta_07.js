import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import { utDissoc } from '../../utils/util_06';
import { getDlcxt_2 } from './delta_06';

export const buildDlcxt_3 = dlcxt_2 => {

  // Get silk cross
  const _getSlcros = (isWbocr, lhcros) => {

    E.cknwb(isWbocr, 'isWbocr');

    // Cross is slicable
    const cslab = isWbocr ||
      (lhcros.isStruck && !isWbocr);

    const cswbx = cslab && lhcros.isRbxc;
    const cswnb = cslab && !lhcros.isRbxc;

    // Get cross type, i.e. wheat bowl or Cheese
    // [cstc]
    const cstype = isWbocr? 'w' : 'c';

    if(cswbx){

      const _dpcros = utDissoc(lhcros, ['rpilcs']);
      const _hdncrs = lhcros.rpilcs;

      const dpcid =
        cstype + 's'
        + lhcros.lhcdwi.toString();

      const hdcid =
        cstype + 'h'
        + lhcros.lhcdwi.toString();

      const dpcros = {
        ..._dpcros,
        isWbocr,
        isDplcr: true,
        crsid: dpcid
      }

      const hdncrs = {
        ..._hdncrs,
        isWbocr,
        isDplcr: false,
        crsid: hdcid
      }

      return [dpcros, hdncrs];
    }
    else if(cswnb){

      const dpcid =
        cstype + 's'
        + lhcros.lhcdwi.toString();

      const dpcros = {
        ...lhcros,
        crsid: dpcid,
        isWbocr,
        isDplcr: true
      };

      return [dpcros];
    }
    else {
      return [];
    }
  }
  const getSlcros = R.curry(_getSlcros);

  // Wheat bowl silk cross list
  const wbslcl = R.compose(
    R.flatten,
    R.map(getSlcros(true)))
  (dlcxt_2.wbowcl);

  // Cheese silk cross list
  const chslcl = R.compose(
    R.flatten,
    R.map(getSlcros_c(false)))
  (dlcxt_2.chescl);

  // Total silk cross list, i.e.
  // [wbslcl] concats [chslcl];

  const toslcl = R.concat(wbslcl, chslcl);
  return toslcl;
}

export const getDlcxt_3 =
  R.compose(buildDlcxt_3, getDlcxt_2);
