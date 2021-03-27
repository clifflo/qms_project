import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { arrmtSet } from '../twigs/twig_5';
import produce from 'immer';
import { getFlushOp } from '../twigs/twig_4';

export const getDelta_3 = odelta_2 => {

  try{
    // Day Branch of Delta
    const ddbr = odelta_2.deDay[1];

    if(!RA.isString(ddbr)){
      throw new Error(
        'Day Branch of Delta must be string.');
    }

    if(ddbr.length != 1){
      throw new Error(
        'Day Branch of Delta must just '
        + 'be a single character.');
    }


    if(R.isNil(ddbr)){
      throw new Error(
        'Day Branch of Delta should not be nil.');
    }

    // Day Branch Suspect
    const dbsp = arrmtSet[ddbr];

    // Day Branch Flush Opponent
    const dbfo = getFlushOp(ddbr);

    const mapFn = cross => {
      const crbh = cross.crbh;

      // Is Day Branch Suspect?
      const suspect = arrmtSet[ddbr];
      const isDbsp = crbh == dbsp;
      const isDbfo = crbh == dbfo;

      return {
        ...cross,
        isDbsp,
        isDbfo
      }
    }

    const changed_crsa = R.map(mapFn, odelta_2.crsa);
    const delta_3 = produce(odelta_2, ddelta_3 => {
      ddelta_3.crsa = changed_crsa;
      ddelta_3.dbfo = dbfo;
      ddelta_3.dbsp = dbsp;
    });

    return delta_3;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get Delta 3.')
  }


}
