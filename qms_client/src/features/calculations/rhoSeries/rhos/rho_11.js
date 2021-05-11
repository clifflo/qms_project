import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import * as E from '../../examiner';
import {
  dfcns
} from './rho_09';
import {
  rhoLongHookContextSet_5
} from './rho_10';
import {
  getRcxtvByLhn
} from './rho_05';

const getRhoLongHookContextSet_6 = () => {

  const mapFn = rhocxt => {

    // Unique focus list
    const unifcl = R.compose(
      R.uniq,
      R.map(R.prop('dfccn')))
    (rhocxt.lhcrsl);

    // Is lurking long hook, i.e. long hook with
    // hidden part. It is not the same as [rbxc],
    // of which is referring to a cross, but not
    // a long hook.
    const isLklh = unifcl.length < 5;

    // Delta hidden focus list
    const dlhdfl = R.difference(dfcns, unifcl);

    if(isLklh){

      // Delta pilot cross list
      const deltaPilotCrossList = R.find(
        R.propEq('longHookName', '純' + rhocxt.rhlhn),
        rhoLongHookContextSet_5).lhcrsl;

      E.checkNilWithArray(deltaPilotCrossList, 'deltaPilotCrossList');

      return {
        ...rhocxt,
        isLklh,
        dlhdfl,
        deltaPilotCrossList,
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

  return R.map(mapFn, rhoLongHookContextSet_5)
}

export const rhoLongHookContextSet_6 = getRhoLongHookContextSet_6();

export const getRcxt6ByLhn = longHookName => {

  try {
    return getRcxtvByLhn(
      longHookName, rhoLongHookContextSet_6, 6);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [rhocxt_6] by long hook name.')
  }
}
