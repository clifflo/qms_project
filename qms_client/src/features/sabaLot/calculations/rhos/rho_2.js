import * as R from 'ramda';
import * as RA from 'ramda-adjunct';
import { decimalToBinary } from '../utils/util_2';
import {
  lhcts_1,
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

    // Local Short Hook Bean Trunk
    const lshbt = natto.eshbt;

    // Local Bean Branch Series
    const lbbrs = natto.ebbrs;

    if(R.isNil(lshbt)){
      throw new Error(
        'LSHBT should not be nil.')
    }

    if(R.isNil(lbbrs)){
      throw new Error(
        'LBBRS should not be nil.');
    }

    return {
      soyBean,
      mustardSeries
    }
  }
  else {

    const soyBean = natto.isb;
    const mustardSeries = natto.ims;

    if(R.isNil(soyBean)){
      throw new Error(
        'Internal Soy Bean should not be nil.')
    }

    if(R.isNil(mustardSeries)){
      throw new Error(
        'Internal Mustard Series should not be nil.');
    }

    return {
      soyBean,
      mustardSeries
    }
  }

}

const buildCrosses = (
  fms, // Full Mustard Series
  esht, // External Short Hook Trunk
  isht, // Internal Short Hook Trunk
  crsi, // Cross sign
  downwardIndex,
  list) => {

  // Cross Trunk
  const crtk = downwardIndex <= 2 ?
    esht : isht;

  // Cross Branch
  const crbh = fms[downwardIndex];

  // Cross Branch Elemental
  const cbe = getElem(crbh);

  return {
    crsi, // Cross Sign
    crtk, // Cross Trunk
    crbh, // Cross Branch
    cbe // Cross Branch Elemental
  }

}

export const getLhcts_2 = (lhs) => {

  const mapFn = (lh) => {

    try {

      const eshBinary = decimalToBinary(
        lh.eshIdx, 3);

      const ishBinary = decimalToBinary(
        lh.ishIdx, 3);


      let ems; // External Mustard Series
      let eshbt; // External Short Hook Bean Trunk
      let ims; // Internal Mustard Series
      let ishbt; // Internal Short Hook Bean Trunk

      // External truncated natto
      const etn = getTruncatedNatto(
        lh.eshori, true);

      // Internal truncated Natto
      const itn = getTruncatedNatto(
        lh.ishori, false);

      ems = etn.mustardSeries;
      esb = etn.soyBean;
      ims = itn.mustardSeries;
      isb = itn.soyBean;

      if(R.isNil(esb)){
        throw new Error(
          'External Soy Bean should not be nil.')
      }

      if(R.isNil(isb)){
        throw new Error(
          'Internal Soy Bean should not be nil.')
      }

      // Full Mustard Series
      const fms = ems + ims;

      const lhBinary = decimalToBinary(
        lh.lhIdx,
        6);

      const mapFn = R.curry(buildCrosses)
        (fms)
        (esb)
        (isb);

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

export const lhcts_2 =
  getLhcts_2(lhcts_1);
