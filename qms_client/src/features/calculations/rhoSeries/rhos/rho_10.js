import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  dfcns
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
      R.map(R.prop('dfccn')))
    (rhocxt.lhcrsl);

    // Is lurking long hook, i.e. long hook with
    // hidden part.
    const isLklh = unifcl.length < 5;

    // Delta hidden focus list
    const dlhdfl = R.difference(dfcns, unifcl);

    if(isLklh){

      // Rho pilot cross list
      const dpilcl = R.find(
        R.propEq('lhname', '純' + rhocxt.rhlhn),
        rhocs_5).lhcrsl;

      E.cknwa(dpilcl, 'dpilcl');

      return {
        ...rhocxt,
        isLklh,
        dlhdfl,
        dpilcl,
        _type: 'rhocxt_8'
      }
    }
    else {
      return {
        ...rhocxt,
        isLklh,
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
      'Cannot get [rhocxt_6] by long hook name.')
  }
}
