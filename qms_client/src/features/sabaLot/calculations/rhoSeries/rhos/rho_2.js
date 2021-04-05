import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import {
  decimalToBinary
} from '../../utils/util_2';
import {
  rhocs_1,
  nattos,
} from './rho_1';
import {
  getElem
} from '../../twigs/twig_1';

const getTruncatedNatto = (
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
        'Internal Short Hook Bean Trunk '
        + 'should not be nil.')
    }

    if(R.isNil(lbbrs)){
      throw new Error(
        'Internal Bean Branch Series '
        + 'should not be nil.');
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
  downwardIndex,
  list) => {

  const crtk = downwardIndex <= 2 ?
    eshbt : ishbt;

  const crbh = fbbrs[downwardIndex];

  const cbel = getElem(crbh);

  return {
    crsi, // Cross Sign
    crtk, // Cross Trunk
    crbh, // Cross Branch
    cbel // Cross Branch Elemental
  }
}

export const getRhocs_2 = (lhs) => {

  const mapFn = (lh) => {

    try {

      const eshBinary = decimalToBinary(
        lh.eshidx, 3);

      const ishBinary = decimalToBinary(
        lh.ishidx, 3);


      let ebbrs; // External Bean Branch Series
      let eshbt; // External Short Hook Bean Trunk
      let ibbrs; // Internal Bean Branch Series
      let ishbt; // Internal Short Hook Bean Trunk

      // External truncated natto
      const etn = getTruncatedNatto(
        lh.eshkor, true);

      // Internal truncated Natto
      const itn = getTruncatedNatto(
        lh.ishkor, false);

      ebbrs = etn.lbbrs;
      eshbt = etn.lshbt;
      ibbrs = itn.lbbrs;
      ishbt = itn.lshbt;

      if(R.isNil(ebbrs)){
        throw new Error(
          'External Bean Branch Series should not be nil.')
      }

      if(R.isNil(ibbrs)){
        throw new Error(
          'Internal Bean Branch Series should not be nil.')
      }

      // Full Bean Branch Series
      const fbbrs = R.concat(ebbrs, ibbrs);

      const lhBinary = decimalToBinary(
        lh.lhidx,
        6);

      const mapFn = R.curry(buildCrosses)
        (fbbrs)
        (eshbt)
        (ishbt);

      const crosses = RA.mapIndexed(
        mapFn,
        R.drop(1, lhBinary));

      return {
        lhname: lh.lhname,
        eshkor: lh.eshkor,
        ishkor: lh.ishkor,
        crosses
      }
    }
    catch(err){
      console.error(err);
      throw new Error(
        'Cannot build bean branch series.');
    }

  }

  return R.map(mapFn, lhs)
}

export const rhocs_2 = getRhocs_2(rhocs_1);

export const getRcxt2ByLhn = lhname => {

  const lhContext = R.find(
    R.propEq('lhname', lhname),
    rhocs_2);

  if(R.isNil(lhContext)){
    throw new Error(
      `${lhname} is not a valid long hook.`);
  }

  return lhContext;
}
