import * as R from 'ramda';

// Get rho crosses by focus.
export const getRcsbfc = (rofcs, lhcres) => {

  if(R.isNil(rofcs)){
    throw new Error(
      'ROFCS should not be nil.');
  }

  if(R.isNil(lhcres)){
    throw new Error(
      'LHCRES should not be nil.');
  }

  try{
    const csbfc = R.filter(
      R.propEq('rofcs', rofcs),
      lhcres);

    return csbfc;
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get CSBFC.');
  }
}

// Get rho jack cross
export const getRjcos = rhocxt => {

  if(R.isNil(rhocxt)){
    throw new Error(
      'RHOCXT should not be nil.');
  }

  try{
    const lhcres = rhocxt_3.lhcres;
    const rjkdi = rhocxt_3.rjkdi;

    if(R.isNil(lhcres)){
      throw new Error(
        'LHCRES should not be nil.');
    }

    if(R.isNil(rjkdi)){
      throw new Error(
        'RJKDI should not be nil.');
    }

    return rhocxt.lhcres[rjkdi];
  }
}

// Get rho king cross
export const getRkcos = rhocxt => {

  if(R.isNil(rhocxt)){
    throw new Error(
      'RHOCXT should not be nil.');
  }

  try{
    const lhcres = rhocxt.lhcres;
    const rkgdi = rhocxt.rkgdi;

    if(R.isNil(lhcres)){
      throw new Error(
        'LHCRES should not be nil.');
    }

    if(R.isNil(rkgdi)){
      throw new Error(
        'RKGDI should not be nil.');
    }

    return rhocxt.lhcres[rkgdi];
  }
}

// Get rho queen cross
export const getRqcos = rhocxt => {

    if(R.isNil(rhocxt)){
      throw new Error(
        'RHOCXT should not be nil.');
    }

    try{
      const lhcres = rhocxt.lhcres;
      const rqndi = rhocxt.rqndi;

      if(R.isNil(lhcres)){
        throw new Error(
          'LHCRES should not be nil.');
      }

      if(R.isNil(rqndi)){
        throw new Error(
          'RQNKI should not be nil.');
      }

      return rhocxt.lhcres[rqndi];
    }
}
