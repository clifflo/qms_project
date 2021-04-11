import * as R from 'ramda';

export const getRhocs_8 = () => {

  const mapFn_1n = (lhcros, rhcres) => {

  }

  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = rhocxt => {

    if(!rhocxt.isLhhd){
      return rhocxt;
    }
    else {

      const rhcres = rhocxt.rhcres;

      if(R.isNil(rhcres)){
        throw new Error(
          'RHCRES should not be nil.');
      }

      const lhcres_2 =
        R.map(mapFn_1c(rhocxt.r))
    }
  }
}
