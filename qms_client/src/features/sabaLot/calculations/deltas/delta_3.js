import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { armtSet } from '../twigs/twig_5';
import produce from "immer"

export const getDelta_3 = delta_2 => {

  try{
    // Day Branch of Delta
    const ddbr = delta_2.deDay[1];

    if(!RA.isString(ddbr)){
      throw new Error(
        'Day Branch of Delta must be string.');
    }

    if(ddbr.length != 1){
      throw new Error(
        'Day Branch of Delta must just be a single character.');
    }


    if(R.isNil(ddbr)){
      throw new Error(
        'Day Branch of Delta should not be nil.');
    }

    const suspect = armtSet[ddbr];

    if(R.isNil(suspect)){
      throw new Error(
        'The suspect should not be nil. '
        + "Is your Day Branch of Delta correct?");
    }

    const mapFn = cross => {
      const crbh = cross.crbh;
      // Is Day Branch Suspect?
      const isDbsp = suspect == crbh;
      return {
        ...cross,
        isDbsp
      }
    }

    const changed_crsa = R.map(mapFn, delta_2.crsa);
    const delta_3 = produce(delta_2, draft_delta_3 => {
      draft_delta_3.crsa = changed_crsa;
      draft_delta_3.dbsp = suspect;
    });

    return delta_3;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get Delta 3.')
  }


}
