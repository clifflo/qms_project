const getTrnto = (
  gshori,
  isShetp) => {

  const firstGshori = nattos[0].gshori;

  if(R.isNil(firstGshori)){
    throw new Error(
      'First natto does not have GSHORI. '
      + 'Please check the schema.');
  }

  if(R.isNil(gshori)){
    throw new Error(
      'GSHORI should not be nil.');
  }

  const natto = R.find(
    R.propEq('gshori', gshori), nattos);

  if(!natto){
    throw new Error(
      `Cannot find natto. ${gshori} is not valid.`);
  }

  if(isShetp){

    if(R.isNil(natto.eshbt)){
      throw new Error(
        'ESHBT should not be nil.')
    }

    if(R.isNil(natto.ebbrs)){
      throw new Error(
        'EBBRS should not be nil.');
    }

    return {
      lshbt: natto.eshbt,
      lbbrs: natto.ebbrs
    }
  }
  else {

    const lshbt = natto.ishbt;
    const lbbrs = natto.ibbrs;

    if(R.isNil(lshbt)){
      throw new Error(
        'ISHBT should not be nil.');
    }

    if(R.isNil(lbbrs)){
      throw new Error(
        'IBBRS should not be nil.');
    }

    return {
      lshbt,
      lbbrs
    }
  }

}

const buildCrosses = (
  fbbrs,
  eshbt,
  ishbt,
  crsi,
  lhcdwi,
  list) => {

  const crtk = lhcdwi <= 2 ?
    eshbt : ishbt;

  const crbh = fbbrs[lhcdwi];

  const crbel = getElem(crbh);

  return {
    crsi,
    crtk,
    crbh,
    crbel,
    lhcdwi
  }
}
