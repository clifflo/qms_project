import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { rhocs_7 } from './rho_7';

const getRhocs_8 = () => {

  const mapFn_1n = (rhocxt, idx) => {

    const cross = rhocxt.crosses[idx];
    const rhcrs = rhocxt.rhces[idx];
    const rhhfs = rhocxt.rhhfs;

    if(R.isNil(cross)){
      throw new Error(
        'Cross should not be nil.');
    }

    if(R.isNil(rhcrs)){
      throw new Error(
        'Rho Hidden Cross should not be nil.');
    }

    if(R.isNil(rhhfs)){
      throw new Error(
        'Rho Hidden Hook Focus Set should '
        + 'not be nil.');
    }

    try{
      // Is Rho Relevant Hidden Cross
      const isRrhcs = R.includes(
        rhcrs.crfcs, rhhfs);

      if(isRrhcs){
        return {
          ...cross,
          rrhcs: rhcrs,
          isRrhcs
        }
      }
      else {
        return {
          ...cross,
          isRrhcs
        }
      }
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Map Function 1 does not work.');
    }
}

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = rhocxt_1 => {
    if(rhocxt_1.isLhhd){
      const crosses_2 =
        R.map(mapFn_1c(rhocxt_1), R.range(0, 6));

      const xLens = R.lensProp('crosses');
      const rhocxt_2 = R.set(
        xLens,
        crosses_2,
        rhocxt_1);

      const rhocxt_3 = R.compose(
        R.dissoc('rhhfs'),
        R.dissoc('rhces'))
      (rhocxt_2);

      return rhocxt_3;
    }
    else {
      return rhocxt_1;
    }

  }

  try{
    const rhocs_8 = R.map(mapFn_2, rhocs_7);
    return rhocs_8;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Rho Context 8.');
  }

}

export const rhocs_8 = getRhocs_8();
