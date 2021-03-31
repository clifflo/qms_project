import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { decimalToBinary } from '../utils/util_2';
import {
  rhocs_1,
  nattos,
} from './rho_1';
import {
  getElem
} from '../twigs/twig_1';

const getTruncatedNatto = (
  shori,
  isUpperShortTrunk) => {

  const natto = R.find(
    R.propEq('shori', shori), nattos);

  if(R.isNil(shori)){
    throw new Error(
      'Short hook original should not be nil.');
  }

  if(!natto){
    throw new Error(
      `Cannot find natto. ${shori} is not valid.`);
  }

  if(isUpperShortTrunk){

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
        'Internal Soy Bean should not be nil.')
    }

    if(R.isNil(lbbrs)){
      throw new Error(
        'Internal Mustard Series should not be nil.');
    }

    return {
      lshbt,
      lbbrs
    }
  }

}

const buildCrosses = (
  fbbrs, // Full Bean Branch Series
  eshbt, // External Short Hook Bean Trunk
  ishbt, // Internal Short Hook Bean Trunk
  crsi, // Cross sign
  downwardIndex,
  list) => {

  // Cross Trunk
  const crtk = downwardIndex <= 2 ?
    eshbt : ishbt;

  // Cross Branch
  const crbh = fbbrs[downwardIndex];

  // Cross Branch Elemental
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
        lh.eshIdx, 3);

      const ishBinary = decimalToBinary(
        lh.ishIdx, 3);


      let ebbrs; // External Bean Branch Series
      let eshbt; // External Short Hook Bean Trunk
      let ibbrs; // Internal Bean Branch Series
      let ishbt; // Internal Short Hook Bean Trunk

      // External truncated natto
      const etn = getTruncatedNatto(
        lh.eshori, true);

      // Internal truncated Natto
      const itn = getTruncatedNatto(
        lh.ishori, false);

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
        lh.lhIdx,
        6);

      const mapFn = R.curry(buildCrosses)
        (fbbrs)
        (eshbt)
        (ishbt);

      const crosses = RA.mapIndexed(
        mapFn,
        R.drop(1, lhBinary));

      return {
        lhName: lh.lhName,
        eshori: lh.eshori,
        ishori: lh.ishori,
        crosses
      }
    }
    catch(err){
      console.error(err);
      throw new Error('Cannot build mustard series.');
    }

  }

  return R.map(mapFn, lhs)
}

export const rhocs_2 =
  getRhocs_2(rhocs_1);
