import * as R from 'ramda';
import * as E from '../../examiner';
import {
  trunkOrder
} from '../../twigs/twig_01';
import {
  rhoContextSet_1
} from './rho_01';
import {
  getRcxtvByLhn
} from './rho_05';
import {
  rhoContextSet_7
} from './rho_12';

const getRhoContextSet_8 = () => {

  // [rpilcs] stands for Rho pilot cross, i.e.
  // the cross referring to the rho pilot,
  // so it is also the hidden cross.
  // [dlhdfl] is the delta hidden focus list.
  const mapFn_1n =
    (lhcrsl, dlhdfl, rpilcs) => {

    E.checkNilWithArray(lhcrsl, 'lhcrsl');
    E.cknwo(rpilcs, 'rpilcs');
    E.checkNilWithArray(dlhdfl, 'dlhdfl');

    const longHookCross = lhcrsl[rpilcs.longHookCrossDownwardIndex];
    E.cknwo(longHookCross);

    const dfccn = rpilcs.dfccn;
    E.checkNilWithString(dfccn, 'dfccn');

    // Is rho boxed cross, i.e. a cross
    // with a hidden part.
    const isRbxc = R.includes(
      dfccn, dlhdfl);

    if(isRbxc){
      return {
        isRbxc,
        ...longHookCross,
        rpilcs
      }
    }
    else {
      return {
        isRbxc,
        ...longHookCross
      }
    }
  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = rhocxt => {

    if(!rhocxt.isLklh){
      return rhocxt;
    }
    else {

      const deltaPilotCrossList = rhocxt.deltaPilotCrossList;
      const dlhdfl = rhocxt.dlhdfl;

      E.checkNilWithArray(deltaPilotCrossList, 'deltaPilotCrossList');
      E.checkNilWithArray(dlhdfl, 'dlhdfl');

      const lhcrsl =
        R.map(
          mapFn_1c(rhocxt.lhcrsl)(dlhdfl),
          deltaPilotCrossList);

      E.checkNilWithArray(lhcrsl, 'lhcrsl');

      return {
        ...rhocxt,
        _type: 'rpilcs',
        lhcrsl
      }
    }
  }

  try {
    return R.map(mapFn_2, rhoContextSet_7);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get RHOCS_8');
  }
}

export const rhoContextSet_8 = getRhoContextSet_8();

export const getRcxt8ByLhn = longHookName => {
  try {
    return getRcxtvByLhn(
      longHookName, rhoContextSet_8, 8);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get [rhocxt_8] by [longHookName].')
  }
}
