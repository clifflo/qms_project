import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  getDfcba,
  isValidDfcal,
  isValidDplal
} from './delta_09';

// [cbfwf] is cross by focus with rho face card
export const getCbfwr =
  (dfcal, rfacd, slcrl) => {

  const findFn = slcros => {

    const dfccn = getDfcba(dfcal);

    const matchFocus = slcros.dfccn == dfccn;

    const matchJack = rfacd == 'Jack'
      && slcros.isRjk;

    const matchKing = rfacd == 'King'
      && slcros.isRkg;

    const matchQueen = rfacd == 'Queen'
      && slcros.isRqn;

    const matchFace = R.anyPass([
      matchJack,
      matchKing,
      matchQueen
    ]);

    return matchFace && matchFocus;
  }

  try{
    const result = R.find(findFn, slcrl);
    return result;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get [cbfwr].');
  }
}

export const getCbfrp =
  (dfcal, rfacd, ) => {

  }
