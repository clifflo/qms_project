import * as R from 'ramda';
import {
  getRcxt2ByLhn
} from '../rhos/rho_2';
import {
  getRcxt4ByLhn
} from '../rhos/rho_4';
import {
  decimalToBinary
} from '../../utils/util_2';
import {
  getFlhop,
  getHitop,
  getPseop
} from '../../twigs/twig_5';

export const getCestm = (srclhn, tgtlhn) => {

  const srocxt_2 = getRcxt2ByLhn(srclhn);
  const tgtcxt_2 = getRcxt2ByLhn(tgtlhn);

  const isZeroOrOne = crsi => {
    return (crsi == '0') || (crsi == '1');
  }

  const mapFn = cridx => {
    const scrsi = srocxt_2.lhcres[cridx].crsi;
    const tcrsi = tgtcxt_2.lhcres[cridx].crsi;

    if(R.isNil(scrsi)){
      throw new Error(
        'Source Cross Sign should not be nil.');
    }

    if(R.isNil(tcrsi)){
      throw new Error(
        'Target Cross Sign should not be nil.');
    }

    if(!isZeroOrOne(scrsi)){
      throw new Error(
        'Source Cross Sign must be 1 or 0.');
    }

    if(!isZeroOrOne(tcrsi)){
      throw new Error(
        'Target Cross Sign must be 1 or 0.');
    }

    return scrsi != tcrsi;
  }

  return R.map(mapFn, R.range(0, 6));

}

// Rho day branch reaction context 1
export const getRdbrc_1 = (rdbr, lhname) => {

  // Rho day flush opponent
  const rdfho = getFlhop(rdbr);
  const rdhto = getHitop(rdbr);
  const rdpso = getPseop(rdbr);

  if(R.isNil(rdfho)){
    throw new Error(
      'RDFHO should not be nil.');
  }

  if(R.isNil(rdhto)){
    throw new Error(
      'RDHTO should not be nil.');
  }

  if(R.isNil(rdpso)){
    throw new Error(
      'RDPSO should not be nil.');
  }

  const mapFn = lhcros => {

    const crbh = lhcros.crbh;

    if(R.isNil(crbh)){
      throw new Error(
        'Cross branch should not be nil.');
    }

    return {
      isRdfho: crbh == rdfho,
      isRdhto: crbh == rdhto,
      isRdpso: crbh == rdpso,
      crbh,
      lhcdwi: lhcros.lhcdwi
    }
  }

  try{
    const rhocxt_4 = getRcxt4ByLhn(lhname);
    const rdbrs_1 = R.map(mapFn, rhocxt_4.lhcres);
    return {
      rdfho,
      rdhto,
      rdpso,
      rdbrs_1
    }
  }
  catch(err){
    console.error(err);
    throw new Error('Cannot get RDBRC_1.');
  }
}
