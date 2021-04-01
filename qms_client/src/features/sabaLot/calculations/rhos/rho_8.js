import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { rhocs_7 } from './rho_7';

const getRhocs_8 = () => {

  const mapFn_1n = (rhocxt, idx) => {

    const cross = rhocxt.crosses[idx];
    const rhcrs = rhocxt.rhces[idx];
    const rhhfs = rhocxt.rhhfs;

    // Is Rho Relevant Hidden Cross
    const isRrhcs = R.includes(
      rhcrs.crfcs, rhhfs);

    if(isRrhcs){
      return {
        ...cross,
        rrhcs: rhcrs
      }
    }
    else {
      return cross
    }

}

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = rhocxt => {
    return R.map(mapFn_1c(rhocxt), R.range(0, 6));
  }

  try{
    const rhocs_8 = R.map(mapFn_2, rhocs_7);
  }
  catch(err){
    console.error(err);
    throw new Error();
  }

}
