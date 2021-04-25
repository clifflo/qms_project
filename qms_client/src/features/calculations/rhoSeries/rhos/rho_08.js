
export const isValidRfchi = rfchi => {

  if(R.isNil(rfchi)){
    throw new Error(
      'RFCHI should not be nil.');
  }

  if(!RA.isString(rfchi)){
    throw new Error(
      'RFCHI must be a string.');
  }

  const isValid = R.includes(rfchi, rfcis);

  return isValid;
}

export const isValidRfcode = rfcode => {

  if(R.isNil(rfcode)){
    throw new Error(
      'RFCODE should not be nil.');
  }

  if(!RA.isString(rfcode)){
    throw new Error(
      'RFCODE must be a string.');
  }

  const isValid = R.includes(rfcode, rfcds);

  return isValid;
}

// Get rho focus chinese
export const getRfchi = rfcode => {

  if(R.isNil(rfcode)){
    throw new Error(
      'RFCODE should not be nil for ' +
      'getting RFCHI.')
  }

  if(!isValidRfcode(rfcode)){
    throw new Error(
      `${rfcode} is not a valid RFCODE.`);
  }

  return rfcom[rfcode];
}

const getRhocs_5 = () => {

  const mapFn_1n = (rhshel, lhcros_1) => {

    try{
      const rrfcs = getElre(
        rhshel, lhcros_1.crbel);

      if(R.isNil(rrfcs)){
        throw new Error(
          'RRFCS should not be nil.');
      }

      // Rho chinese focus
      const rfchi = rfram[rrfcs];

      if(R.isNil(rfchi)){
        throw new Error(
          'ROFCS should not be nil.');
      }

      const rfchiLens = R.lensProp('rfchi');
      let lhcros_2 = R.set(
        rfchiLens, rfchi, lhcros_1);
      return lhcros_2;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'MAPFN_1 is error for get RHOCS_5.');
    }
  }
  const mapFn_1c = R.curry(mapFn_1n);

  const mapFn_2 = rhocxt_4 => {

    try{
      const lhcres = R.map(
        mapFn_1c(rhocxt_4.rhshel),
        rhocxt_4.lhcres);
      const lhcresLens = R.lensProp('lhcres');
      const rhocxt_5 = R.set(
        lhcresLens, lhcres, rhocxt_4);
      return rhocxt_5;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'MAPFN_2 for get RHOCS_5 is error.');
    }
  }

  return R.map(mapFn_2, rhocs_4);
}

export const rhocs_5 = getRhocs_5();
