import * as R from 'ramda';
import {
  branchOrder,
  trunkOrder,
  isValidBranch,
  isValidTrunk,
} from './twig_1';
import {
  isValidAnimal,
  isValidMonth,
  trunkRegex,
  varbrhRegex,
  monthRegex
} from './twig_7';

// BRKSPA is brake sentence part array
// BKFSTC_1 is brake full sentence version 1
export const getBkfstc_1 = brkspa => {

  const bkfstc_1 = R.join('', brkspa);
  const bkfstc_2 = bkfstc_1.replace(
    '十一', '霜');
  const bkfstc_3 = bkfstc_2.replace(
    '十二', '臘');

  const mapFn = character => {

    // Is responsible character function
    const isRescrf = R.anyPass([
      isValidTrunk,
      isValidBranch,
      isValidAnimal,
      isValidMonth
    ]);

    const isReschr = isRescrf(character);

    if(isReschr){
      return character;
    }
    else {
      return '_'
    }
  }

  try {
    const bkfstc_4 = R.compose(
      R.join(''),
      R.reject(R.equals('_')),
      R.map(mapFn))
    (bkfstc_3);

    return bkfstc_4;
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot parse brake sentence.');
  }
}
