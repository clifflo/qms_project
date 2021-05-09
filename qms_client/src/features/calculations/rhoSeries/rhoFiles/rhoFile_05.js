import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  longHookParagraph
} from './rhoFile_03';
import {
  rhoContextMapFunction_1,
} from './rhoFile_04';

const buildRhoContextSet_1 = () => {

  try{
    return R.compose(
      R.map(rhoContextMapFunction_1),
      R.split(',')
    )
    (longHookParagraph);
  }
  catch(errorMessage){
    console.error(errorMessage);
    throw new Error(
      'Cannot build Rho Context Set 1.')
  }
}

export const rhoContextSet_1 =
  buildRhoContextSet_1();
