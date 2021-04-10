import * as R from 'ramda';
import * as RA from 'ramda-adjunct';


const getTrnto = (
  gshkor,
  isShetp) => {

  if(R.isNil(gshkor)){
    throw new Error(
      'GSHKOR should not be nil.');
  }

  const natto = R.find(
    R.propEq('gshkor', gshkor), nattos);

  if(!natto){
    throw new Error(
      `Cannot find natto. ${gshkor} is not valid.`);
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


export const getRhocs_2 = () => {

  const mapFn = rhocxt => {

    try{

      const eshBinary = decimalToBinary(
        rhocxt.eshidx, 3);

      const ishBinary = decimalToBinary(
        rhocxt.ishidx, 3);

      let ebbrs; // External Bean Branch Series
      let eshbt; // External Short Hook Bean Trunk
      let ibbrs; // Internal Bean Branch Series
      let ishbt; // Internal Short Hook Bean Trunk

      const etn = getTrnto(
        rhocxt.eshkor, true);

      const itn = getTrnto(
        rhocxt.ishkor, false);

      ebbrs = etn.lbbrs;
      eshbt = etn.lshbt;
      ibbrs = itn.lbbrs;
      ishbt = itn.lshbt;

      if(R.isNil(ebbrs)){
        throw new Error(
          'EBBRS should not be nil.')
      }

      if(R.isNil(ibbrs)){
        throw new Error(
          'IBBRS should not be nil.')
      }

      const fbbrs = R.concat(ebbrs, ibbrs);

      const lhBinary = decimalToBinary(
        rhocxt.lhidx,
        6);

      const mapFn = R.curry(buildCrosses)
        (fbbrs)
        (eshbt)
        (ishbt);

      const lhcres = RA.mapIndexed(
        mapFn,
        R.drop(1, lhBinary));

      return {
        lhname: rhocxt.lhname,
        eshkor: rhocxt.eshkor,
        ishkor: rhocxt.ishkor,
        lhcres
      }
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Cannot build bean branch series.');
    }

  }

  return R.map(mapFn, rhocs_1)
}

export const rhocs_2 = getRhocs_2();

export const getRcxt2ByLhn = lhname => {

  try {
    return getRcxtvByLhn(
      lhname, rhocs_2, 2);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get RHOCXT_2 by long hook name.')
  }
}

const rblhss =
  R.split(',', '姤,遯,否,觀,剝,晉,大有');

const getRhgbs = () => {

  const sLhidx = 63;

  const mapFn = tLhname => {

    const tLhidx =
      getRcxt1ByLhn(tLhname)
      .lhidx;

    if(R.isNil(tLhidx)){
      throw new Error(
        'Target LHIDX should not be nil.');
    }

    if(!RA.isNumber(tLhidx)){
      throw new Error(
        'How come the long hook '
        + 'index becomes a string?');
    }

    const gapBinary = decimalToBinary(
      sLhidx ^ tLhidx,
      6);

    return gapBinary;
  }

  try{

    const rhgbs_1 = R.map(mapFn, rblhss);
    const rhgbs_2 = R.uniq(rhgbs_1);

    if(rhgbs_2.length != 7){
      throw new Error(
        'It must have 7 Rho hook gap binaries'
        + 'only but now it has '
        + rhgbs_2.length + '.');
    }

    return R.map(mapFn, rblhss);
  }
  catch(err){
    console.error(err);
    throw new Error(
      'Cannot get Rho hook gap binaries set.');
  }
}

export const rhgbs = getRhgbs();

const getRhpals = () => {

  const mapFn_1 =
    (gshori, gapBinary, index) => {

    try{

      const gapDecimal = binaryToDecimal(gapBinary);

      const rhlhn = '純' + gshori;
      const rhlix =
        getRcxt1ByLhn(rhlhn)
        .lhidx;

      if(R.isNil(rhlix)){
        throw new Error(
          'RHLIX should not be nil.');
      }

      const rglhi = gapDecimal ^ rhlix;
      const rglct1 =
        getRcxt1ByLhx(rglhi);

      return rglct1.lhname;
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Error in getting hook series.')
    }
  }

  const mapFn_1c = R.curry(mapFn_1);

  const mapFn_2 = gshori => {

    const rlhkss_1 = RA.mapIndexed(
      mapFn_1c(gshori), rhgbs);

    const rlhkss_2 = R.prepend(
      '純' + gshori, rlhkss_1);

    return {
      rhshn: gshori,
      rlhkss: rlhkss_2
    }
  }

  const result = R.map(
    mapFn_2, gshoriOrder);

  return result;
}

export const rhpals = getRhpals();

export const buildRjkdi = rlhgn => {

  const mapper = {
    0: 5,
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 3,
    7: 2
  }

  const lhcuwi = mapper[rlhgn];
  const lhcdwi = 5 - lhcuwi;
  return lhcdwi;
}
