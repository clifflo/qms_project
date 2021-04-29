import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../egghead';
import {
  rfcns
} from './rho_08';
import {
  rhocs_5
} from './rho_09';
import {
  getRcxtvByLhn
} from './rho_05';

const getRhocs_6 = () => {

  const mapFn = rhocxt => {

    // Unique focus list
    const unifcl = R.compose(
      R.uniq,
      R.map(R.prop('rfcna')))
    (rhocxt.lhcrsl);

    // Is lurking long hook, i.e. long hook with
    // hidden part.
    const islklh = unifcl.length < 5;

    // Rho hidden focus list
    const rhdnfl = R.difference(rfcns, unifcl);

    if(islklh){

      // Rho pilot cross list
      const rpilcl = R.find(
        R.propEq('lhname', '純' + rhocxt.rhlhn),
        rhocs_5).lhcrsl;

      E.cknwa(rpilcl, 'rpilcl');

      return {
        ...rhocxt,
        islklh,
        rhdnfl,
        rpilcl,
        _type: 'rhocxt_8'
      }
    }
    else {
      return {
        ...rhocxt,
        islklh,
        _type: 'rhocxt_8'
      }
    }

  }

  return R.map(mapFn, rhocs_5)
}

export const rhocs_6 = getRhocs_6();

export const getRcxt6ByLhn = lhname => {

  try {
    return getRcxtvByLhn(
      lhname, rhocs_6, 6);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get RHOCXT_6 by long hook name.')
  }
}
