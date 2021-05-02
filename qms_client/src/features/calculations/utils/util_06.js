import * as E from '../examiner';
import * as R from 'ramda';

export const utDissoc = (obj, delps) => {

  E.cknwo(obj, 'Object');
  E.cknwa(delps, 'Deleted props');

  const result =
    R.reduce(R.flip(R.dissoc), obj, delps);

  return result;
}
